import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
    StatusCodes,
} from 'http-status-codes';
import { experienceServices } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
    const result = await experienceServices.createExperienceIntoDB(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Experience created successfully!',
        data: result,
    });
});

const getAllExperience = catchAsync(async (req, res) => {
    const result = await experienceServices.getAllExperiences();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Get all experience!',
        data: result,
    });
});

export const experienceControllers = {
    createExperience,
    getAllExperience,
};