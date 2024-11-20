import { z } from "zod";

const blogCreateValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        content: z.string().min(1, "Content is required"),
        tags: z.array(z.string().transform(tag => tag.toUpperCase())).optional(), 
        images: z.array(z.string().url("Invalid image URL")).optional(),
        published: z.boolean().optional(),
    })
});

export const blogValidationSchema = {
    blogCreateValidationSchema,
}