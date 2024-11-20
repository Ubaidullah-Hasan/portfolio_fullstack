import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
        default: [],
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
    },
    isOngoing: {
        type: Boolean,
        default: false,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    },
    images: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});

export const ProjectModel = model<IProject>("Project", projectSchema);