import z from 'zod';

const envSchema = z.object({
  BACKEND_URL: z.url().startsWith('http://'),
});

export const env = envSchema.parse(process.env);
