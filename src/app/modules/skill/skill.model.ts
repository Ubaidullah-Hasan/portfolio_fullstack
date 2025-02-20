import { model, Schema } from 'mongoose';
import { ISkill } from './skill.interface';

const skillSchema = new Schema<ISkill>(
    {
        name: { type: String, required: true, unique: true  },
        percentage: { type: Number, required: true, min: 0, max: 100 },
        description: { type: String, required: true },
        image: { type: String, required: true},
        yearsOfExperience: { type: Number, required: true },
        category: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

export const Skill = model<ISkill>('Skill', skillSchema);