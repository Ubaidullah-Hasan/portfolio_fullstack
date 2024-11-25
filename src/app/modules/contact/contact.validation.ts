import { z } from "zod";

export const contactValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email format"),
        message: z.string().min(1, "Message cannot be empty"),
    })
});