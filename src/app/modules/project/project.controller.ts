import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
    StatusCodes,
} from 'http-status-codes';
import { projectServices } from "./project.services";

const createProject = catchAsync(async (req, res) => {
    const result = await projectServices.createProjectsIntoDB(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Project created successfully!',
        data: result,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const result = await projectServices.getAllProjects();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Get all projects!',
        data: result,
    });
});

export const projectsControllers = {
    createProject,
    getAllProjects,
};