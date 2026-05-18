import { z } from 'zod';

export const messageSchema = z.object({
  role: z.enum(['user', 'model']),
  text: z.string().min(1).max(8000),
});

export const createSessionSchema = z.object({
  messages: z.array(messageSchema).min(1).max(50),
  title: z.string().max(120).optional(),
});

export const appendMessagesSchema = z.object({
  messages: z.array(messageSchema).min(1).max(20),
});

export const updateTitleSchema = z.object({
  title: z.string().min(1).max(120),
});

export type MessageInput = z.infer<typeof messageSchema>;
export type CreateSessionInput = z.infer<typeof createSessionSchema>;
export type AppendMessagesInput = z.infer<typeof appendMessagesSchema>;
export type UpdateTitleInput = z.infer<typeof updateTitleSchema>;