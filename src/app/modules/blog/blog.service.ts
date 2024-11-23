import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model"

const createBlog = async (payload:IBlog) => {
    const result = await BlogModel.create(payload);
    return result;
}

const getAllBlogs = async () => {
    const result = await BlogModel.find();
    return result;
}

export const blogServices = {
    createBlog,
    getAllBlogs,
}