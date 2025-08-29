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

export const passwordBaseInputSchema = z.object({
  password: passwordSchema,
  passwordValidate: z.string().optional(),
});

export const changePasswordSchema = z
  .object({})
  .extend(passwordBaseInputSchema.required({ passwordValidate: true }).shape)
  .refine((data) => data.password === data.passwordValidate, {
    message: 'Password does not match.',
    path: ['passwordValidate'],
  });
export type ChangePasswordType = z.infer<typeof changePasswordSchema>;

export const authFormSchema = z
  .object({
    email: z.email('Invalid email address.'),
    name: z.string().optional(),
    isLogin: z.boolean(),
  })
  .extend(passwordBaseInputSchema.shape)
  .refine(
    (data) => data.isLogin || (data.name !== '' && data.name !== undefined),
    {
      message: 'Name is required.',
      path: ['name'],
    }
  )
  .refine(
    (data) =>
      !(data.passwordValidate && data.password !== data.passwordValidate),
    {
      message: 'Passwords do not match.',
      path: ['passwordValidate'],
    }
  );
export type AuthFormType = z.infer<typeof authFormSchema>;

export const userRoleSchema = z.enum(['Admin', 'User'])
export type UserRoleType = z.infer<typeof userRoleSchema>

export const socialMediaSchema = z.object({
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  X: z.string().optional(),
  linkedIn: z.string().optional(),
  whatsApp: z.string().optional(),
});
export type SocialMediaType = z.infer<typeof socialMediaSchema>;

export const userSchema = z.object({
  email: z.string().email('Invalid email'),
  role: userRoleSchema,
  name: z.string().min(1, 'Name is required'),
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  cpf: z.string().optional(),
  rg: z.string().optional(),
  phoneNumber: z.string().optional(),
  socialMedia: socialMediaSchema.optional(),
  profileImage: z.string().optional(),
});
export type UserType = z.infer<typeof userSchema>;