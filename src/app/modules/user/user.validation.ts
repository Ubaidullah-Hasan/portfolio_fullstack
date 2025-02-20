import { z } from 'zod';

const createUserValidationSchema = z.object({
    body: z.object({
        email: z
            .string({
                required_error: 'Email is required',
            })
            .email({
                message: 'Invalid email',
            }),
        password: z.string({
            required_error: 'Password is required',
        }),
        
    }),
});


export const UserValidation = {
    createUserValidationSchema
};
