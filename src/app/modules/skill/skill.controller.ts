import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
    StatusCodes,
} from 'http-status-codes';
import { skillServices } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
    const result = await skillServices.createSkillIntoDB(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skill created successfully!',
        data: result,
    });
});

const getAllSkills = catchAsync(async (req, res) => {
    const result = await skillServices.getAllSkills();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Get all skills!',
        data: result,
    });
});

const skillsAnalysis = catchAsync(async (req, res) => {
    const result = await skillServices.skillsAnalysis();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Get all skills analysis!',
        data: result,
    });
});

export const skillControllers = {
    createSkill,
    getAllSkills,
    skillsAnalysis,
};