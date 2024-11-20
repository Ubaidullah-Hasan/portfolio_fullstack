import { Document } from "mongoose";

export interface IExperience extends Document {
    title: string; // Job title
    company: string; // Company name
    location: string; // Job location
    description: string; // Description of the experience
    startDate: Date; // Start date of the experience
    endDate: Date; // End date of the experience (can be null for current jobs)
    isCurrent: boolean; // Indicates if this is the current job
    skills: string[]; // Skills acquired during this experience
    projectsLink: string[];
}