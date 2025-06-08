import z from 'zod';

const searchSchema = z.object({
    movie: z.string({ required_error: 'O nome do filme é obrigatório!' }),
});

export interface ISearchZod extends z.infer<typeof searchSchema> {}

export default searchSchema;
