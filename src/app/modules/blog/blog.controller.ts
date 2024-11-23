import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
    StatusCodes,
} from 'http-status-codes';
import { blogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const result = await blogServices.createBlog(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Blog created successfully!',
        data: result,
    });
});

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await blogServices.getAllBlogs();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Get all projects!',
        data: result,
    });
});

export const BlogControllers = {
    createBlog,
    getAllBlogs,
};