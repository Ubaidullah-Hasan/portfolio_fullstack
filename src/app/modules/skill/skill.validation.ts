import { z } from 'zod';

const skillCreateValidation = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        percentage: z.number().min(0, "Percentage must be at least 0").max(100, "Percentage must be at most 100"),
        description: z.string().min(1, "Description is required"),
        image: z.string().url("Invalid image URL").optional(),
        yearsOfExperience: z.number().min(0, "Years of experience must be at least 0"),
        category: z.string().default("Web Development"),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
    })
});

export const skillValidationSchema = {
    skillCreateValidation,
}
