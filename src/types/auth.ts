import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { AuthFormType } from '@/schemas';

export interface AuthButtonSelectInterface {
  onForgotPasswordClick?: () => void;
  onToggleForm: () => void;
  isLogin: boolean;
}

export type LoginButtonType = {
  className: string;
  isLoading: boolean;
  isLogin?: boolean;
};

export type LoginFormInterface = {
  errors: FieldErrors<AuthFormType>;
  isLogin?: boolean;
  register: UseFormRegister<AuthFormType>;
};

export type SocialMediaType = {
  instagram?: string | undefined;
  facebook?: string | undefined;
  X?: string | undefined;
  linkedIn?: string | undefined;
  whatsApp?: string | undefined;
};

export type UserRoleType = 'Admin' | 'User';

export type UserType = {
  email: string;
  role: UserRoleType;
  name: string;
  firstName?: string | undefined;
  middleName?: string | undefined;
  lastName?: string | undefined;
  cpf?: string | undefined;
  rg?: string | undefined;
  phoneNumber?: string | undefined;
  socialMedia?: SocialMediaType | undefined;
  profileImage?: string | undefined;
};
