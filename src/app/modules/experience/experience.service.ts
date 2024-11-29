import { IExperience } from "./interface.experience";
import { ExperienceModel } from "./model.experience";


const createExperienceIntoDB = async (payload: IExperience) => {
    const result = await ExperienceModel.create(payload);
    return result;
}

const getAllExperiences = async () => {
    const result = await ExperienceModel.find();
    return result;
}

export const experienceServices = {
    createExperienceIntoDB,
    getAllExperiences,
}