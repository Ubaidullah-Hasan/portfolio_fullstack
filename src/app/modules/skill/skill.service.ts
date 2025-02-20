import { ISkill } from "./skill.interface"
import { Skill } from "./skill.model"

const createSkillIntoDB = async (payload: ISkill) => {
    const result = await Skill.create(payload);
    return result;
}

const getAllSkills = async () => {
    const result = await Skill.find();
    return result;
}

const skillsAnalysis = async () => {
    const result = await Skill.find().select("name percentage");
    return result;
}

export const skillServices = {
    createSkillIntoDB,
    getAllSkills,
    skillsAnalysis,
}