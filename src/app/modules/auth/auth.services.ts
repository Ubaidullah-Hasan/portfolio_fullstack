import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { TLoginUser } from "./auth.interface";
import { createToken } from "../../utils/verifyJWT";
import config from "../../config";
import { User } from "../user/user.model";

const loginUser = async (payload: TLoginUser) => {
    // checking if the user is exist
    const user = await User.isUserExistsByEmail(payload?.email);

    if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
    }

    //checking if the password is correct

    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(StatusCodes.FORBIDDEN, 'Password do not matched');

    //create token and sent to the  client

    const jwtPayload = {
        _id: user._id,
        email: user.email
        // name:
        // photo: todo: add here photo and also schema
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expires_in as string
    );

    return {
        accessToken,
        refreshToken,
    };
};


export const AuthServices = {
    loginUser,
};