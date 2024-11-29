import { z } from "zod";

const experiencCreateValidationsSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        company: z.string().min(1, "Company name is required"),
        location: z.string().min(1, "Location is required"),
        description: z.string().min(1, "Description is required"),
        startDate: z.string()
            .refine((value) => !isNaN(Date.parse(value)), {
                message: "Invalid date format, must be a valid ISO string",
            })
            .refine((date) => {
                const parsedDate = new Date(date);
                return parsedDate <= new Date();
            }, {
                message: "Start date must be in the past or present",
            }),
        endDate: z.string()
            .optional()
            .nullable()
            .refine((value) => {
                if (value) {
                    return new Date(value) <= new Date(); // endDate বর্তমান বা অতীতের তারিখ হতে হবে
                }
                return true; // `null` বা `undefined` হলে কোনো ত্রুটি দেবে না
            }, {
                message: "End date ভবিষ্যতের তারিখ হতে পারবে না", // ত্রুটি বার্তা
            }),
        isCurrent: z.boolean().optional(),
        skills: z.array(z.string()).optional(), // Skills are optional
        projectsLink: z.array(z.string()).optional(),
    }).superRefine((data, ctx) => {
        if (data.endDate) {
            const parsedEndDate = new Date(data.endDate);
            const parsedStartDate = new Date(data.startDate);

            // Ensure the endDate is not before the startDate
            if (parsedEndDate <= parsedStartDate) {
                ctx.addIssue({
                    code: "custom",
                    path: ["endDate"],
                    message: "End date must not be before the start date",
                });
            }
        }
    })
});

export const experienceValidationSchema = {
    experiencCreateValidationsSchema
}