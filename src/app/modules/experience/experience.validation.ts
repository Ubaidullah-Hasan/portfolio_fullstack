import { z } from "zod";

const experiencCreateValidationsSchema = z.object({
    title: z.string().min(1, "Title is required"),
    company: z.string().min(1, "Company name is required"),
    location: z.string().min(1, "Location is required"),
    description: z.string().min(1, "Description is required"),
    startDate: z.date().refine(date => date <= new Date(), {
        message: "Start date must be in the past or present",
    }),
    endDate: z.date().optional().nullable().refine(date => {
        if (date) {
            return date >= new Date(); // Ensure end date is not in the past if provided
        }
        return true; // Allow null
    }, {
        message: "End date must be in the future if provided",
    }),
    isCurrent: z.boolean().optional(),
    skills: z.array(z.string()).optional(), // Skills are optional
    projectsLink: z.array(z.string()).optional(), 
});

export const experienceSchema = {
    experiencCreateValidationsSchema
}