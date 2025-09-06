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
