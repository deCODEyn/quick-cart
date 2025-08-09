import z from 'zod';

const envSchema = z.object({
  VITE_BACKEND_URL: z
    .url()
    .startsWith('http://', { message: "URL must start with 'http://'" }),
});

export const env = envSchema.parse(import.meta.env);
