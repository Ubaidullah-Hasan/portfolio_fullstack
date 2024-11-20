import { Document } from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;
    tags: string[]; // Array of tags for categorization
    images: string[]; // Array of image URLs
    createdAt: Date;
    updatedAt: Date;
    published: boolean; // To indicate if the post is published
}