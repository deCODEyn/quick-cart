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
  isLogin?: boolean;
}

export interface UseAuthFormReturn {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formData: AuthFormData;
}

export type AuthFormData = {
  email: string;
  name?: string;
  password: string;
  passwordValidate?: string;
};

export type LoginButtonType = {
  className: string;
  isLoading: boolean;
  isLogin?: boolean;
};

export type SocialMediaType = {
  instagram?: string | undefined;
  facebook?: string | undefined;
  X?: string | undefined;
  linkedIn?: string | undefined;
  whatsApp?: string | undefined;
}

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
