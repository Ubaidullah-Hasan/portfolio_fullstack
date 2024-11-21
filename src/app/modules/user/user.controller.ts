import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

const userRegister = catchAsync(async (req, res) => {
    const user = await userServices.createUser(req.body);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'User Created Successfully',
        data: user,
    });
});

export const userController = {
    userRegister,
}