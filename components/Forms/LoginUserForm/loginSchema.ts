import z from 'zod';
import registerSchema from '../RegisterUserForm/registerSchema';

const loginSchema = registerSchema.pick({
    email: true,
    password: true,
});

export interface ILoginZod extends z.infer<typeof loginSchema> {}

export default loginSchema;
