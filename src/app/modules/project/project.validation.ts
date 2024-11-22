import { z } from "zod";

const projectCreateSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required"),
        technologies: z.array(z.string()).min(1, "At least one technology is required"),
        startDate: z.string().transform((date) => new Date(date)).refine(date => date <= new Date(), {
            message: "Start date must be in the past or present",
        }),
        endDate: z
            .string()
            .optional() // Field is optional
            .nullable() // Field can be null
            .transform((date) => (date ? new Date(date) : null)) // Convert to Date if provided, else null
            .refine(
                (date) => {
                    if (date) {
                        return date >= new Date(); // Ensure end date is in the future or today
                    }
                    return true; // Allow null or undefined
                },
                {
                    message: "End date must be in the future if provided", // Error message
                }
            ),
        isOngoing: z.boolean().optional(),
        link: z.string().url("Invalid project URL").min(1, "Project link is required"),
        images: z.array(z.string().url("Invalid image URL")).optional(),
    })
});

export const projectValidatio = {
    projectCreateSchema,
}