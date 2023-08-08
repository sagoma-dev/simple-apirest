import z from 'zod';
import { TaskStatus } from './task.entity';

export const taskSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(13)
    .max(50),
  description: z.string().min(10).max(50),
  status: z
    .enum([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    .default(TaskStatus.PENDING),
});

export const validateTask = (task: unknown) => taskSchema.safeParse(task);

export const validatePartialTask = (task: unknown) =>
  taskSchema.partial().safeParse(task);
