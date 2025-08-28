import z from 'zod';

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long.')
  .max(100, 'Password must not be more than 100 characters long.')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(
    /[\d\W]/,
    'Password must contain at least one number or special character.'
  );

export const changePasswordSchema = z
  .object({
    password: passwordSchema,
    passwordValidate: z.string(),
  })
  .refine((data) => data.password === data.passwordValidate, {
    message: 'Password does not match.',
    path: ['passwordValidate'],
  });

export type ChangePasswordType = z.infer<typeof changePasswordSchema>;

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, 'O nome é obrigatório.'),
    email: z.string().email('Endereço de e-mail inválido.'),
    password: passwordSchema,
    passwordValidate: z.string(),
  })
  .refine((data) => data.password === data.passwordValidate, {
    message: 'As senhas não conferem.',
    path: ['passwordValidate'],
  });

export type UserRegisterType = z.infer<typeof userRegisterSchema>;
