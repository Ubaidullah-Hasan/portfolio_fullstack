import { Document} from 'mongoose';

export interface ISkill extends Document {
    name: string;
    percentage: number;
    image: string;
    description: string; 
    yearsOfExperience: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
}

