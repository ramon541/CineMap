import z from 'zod';
import { toISODate } from '../../../utils';

const today = new Date();
const maxDate = new Date(
    today.getFullYear() - 150,
    today.getMonth(),
    today.getDate()
);

export const UserType = z.enum(['A', 'C']);

const userSchema = z.object({
    name: z
        .string({ required_error: 'O nome é obrigatório' })
        .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    password: z
        .string({ required_error: 'A senha é obrigatória' })
        .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    email: z
        .string({ required_error: 'O e-mail é obrigatório' })
        .min(1, 'O e-mail é obrigatório')
        .email('E-mail inválido'),
    nickname: z
        .string({ required_error: 'O apelido é obrigatório' })
        .min(3, 'O apelido deve ter pelo menos 3 caracteres'),
    birthDate: z
        .string({ required_error: 'A data de nascimento é obrigatória' })
        .refine(
            (val) => {
                const iso = toISODate(val);
                if (!iso || isNaN(Date.parse(iso))) return false;
                const parsedDate = new Date(iso);
                return parsedDate >= maxDate && parsedDate <= today;
            },
            {
                message: `A data de nascimento deve ser válida!`,
            }
        )
        .transform((val) => toISODate(val)),
});

export interface IUserZod extends z.infer<typeof userSchema> {}

export default userSchema;
