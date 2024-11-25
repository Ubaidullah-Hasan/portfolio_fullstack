import { Document } from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;
    tags: string[];
    images: string[]; 
    published: boolean; 
}