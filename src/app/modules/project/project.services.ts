import { IProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const createProjectsIntoDB = async (payload: IProject) => {
    const result = await ProjectModel.create(payload);
    return result;
}

const getAllProjects = async () => {
    const result = await ProjectModel.find().limit(3);
    return result;
}

export const projectServices = {
    createProjectsIntoDB,
    getAllProjects,
}