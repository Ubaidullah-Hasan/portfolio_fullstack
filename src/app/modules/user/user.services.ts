import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {

    const user = await User.isUserExistsByEmail(payload?.email);

    if (user) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This user is already exist!');
    }

    const newUser = await User.create(payload);

    return newUser;
};

export const userServices = {
    createUser,
}