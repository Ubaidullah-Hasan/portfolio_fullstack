import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { contactServices } from "./contact.services";

const sendMessage = catchAsync(async (req: Request, res: Response) => {
    const result = await contactServices.sendMessage(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Message send successfull by this email: ${req.body.email}!`,
        data: result,
    });
});

export const contactControllers = {
    sendMessage,
}