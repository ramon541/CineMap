import z from 'zod';

function toISODate(brDate: string) {
    const [day, month, year] = brDate.split('/');
    if (!day || !month || !year) return '';
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

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
                return !!iso && !isNaN(Date.parse(iso));
            },
            { message: 'Data inválida' }
        )
        .transform((val) => toISODate(val)),
});

export interface IUserZod extends z.infer<typeof userSchema> {}

export default userSchema;
