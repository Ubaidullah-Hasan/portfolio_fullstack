import { model, Schema } from 'mongoose';
import { ISkill } from './skill.interface';

const skillSchema = new Schema<ISkill>({
    name: { type: String, required: true },
    percentage: { type: Number, required: true, min: 0, max: 100 },
    description: { type: String, required: false },
    yearsOfExperience: { type: Number, required: true },
    category: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Skill = model<ISkill>('Skill', skillSchema);