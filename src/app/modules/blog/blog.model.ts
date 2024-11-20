import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        images: {
            type: [String], // Array of image URLs
            default: [],
        },
        published: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt fields
    }
);

export const BlogModel = model<IBlog>("Blog", blogSchema);