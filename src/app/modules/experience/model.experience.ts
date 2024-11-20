// experience.model.ts
import { model, Schema } from "mongoose";
import { IExperience } from "./interface.experience";

const experienceSchema = new Schema<IExperience>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: false,
        },
        isCurrent: {
            type: Boolean,
            default: false,
        },
        skills: {
            type: [String],
            default: [],
        },
        projectsLink: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export const ExperienceModel = model<IExperience>("Experience", experienceSchema);