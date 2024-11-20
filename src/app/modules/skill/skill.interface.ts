import { Document, model, Schema, Types } from 'mongoose';

export interface ISkill extends Document {
    name: string;
    percentage: number;
    description: string; // Optional field
    yearsOfExperience: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
}

// level: "Beginner" | "Intermediate" | "Advanced" | "Expert" | "Master";