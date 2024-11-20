import { z } from "zod";

const projectCreateSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    technologies: z.array(z.string()).min(1, "At least one technology is required"),
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
    isOngoing: z.boolean().optional(),
    link: z.string().url("Invalid project URL").min(1, "Project link is required"),
    images: z.array(z.string().url("Invalid image URL")).optional(),
});

export const projectValidatio = {
    projectCreateSchema,
}