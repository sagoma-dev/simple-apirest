import z from 'zod';

export const taskSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'DONE']),
});

export const validateTask = (task: unknown) => taskSchema.safeParse(task);
