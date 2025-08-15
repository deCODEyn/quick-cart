export interface AuthButtonSelectInterface {
  onForgotPasswordClick?: () => void;
  onToggleForm: () => void;
  isLogin: boolean;
}

export interface LoginFormInterface {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: AuthFormData;
  isLogin?: boolean;
}

export interface UseAuthFormInterface {
  onSuccess: () => void;
  isAdmin?: boolean;
  isLogin?: boolean;
}

export interface UseAuthFormReturn {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formData: AuthFormData;
  isLoading: boolean;
}

export type AuthFormData = {
  email: string;
  name?: string;
  password: string;
};

export type LoginButtonType = {
  className: string;
  isLoading: boolean;
  isLogin?: boolean;
};

export type UserType = {
  email: string;
  role: UserRoleType;
};

export type UserRoleType = 'Admin' | 'User';
