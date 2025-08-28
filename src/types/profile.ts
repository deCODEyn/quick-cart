import type { IconType } from 'react-icons/lib';
import type { SingleUserResponse, SocialMediaType, UserType } from '@/types';

export interface EditSocialMediaInterface {
  onChange: (name: string, value: string) => void;
  socialMedia: SocialMediaType;
}

export interface ImageEditModalInterface {
  onClose: () => void;
  onSave: (blob: Blob) => Promise<void>;
  isLoading: boolean;
  imageUrl: string;
}

export interface UseHandleImageReturn {
  handleCloseModal: () => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpenFileInput: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  isModalOpen: boolean;
  selectedImage: string | null;
}

export interface UseProfileFormReturn {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (data: {
    password: string;
    passwordValidate: string;
  }) => void;
  handleSave: (currentPassword: string) => Promise<{
    success: boolean;
    message: string | undefined;
  }>;
  handleSocialInputChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowPasswordModal: (show: boolean) => void;
  isCpfLocked: boolean;
  isRgLocked: boolean;
  showPasswordModal: boolean;
  userData: UserType;
}

export interface UseUseDataReturn {
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<SingleUserResponse>;
  getMe: () => Promise<SingleUserResponse>;
  setProfileImage: (croppedBlob: Blob) => Promise<SingleUserResponse>;
  updateProfile: (
    userData: UserType,
    currentPassword: string
  ) => Promise<SingleUserResponse>;
  userLogin: (email: string, password: string) => Promise<SingleUserResponse>;
  userLogout: () => Promise<SingleUserResponse>;
  userRegister: (
    email: string,
    password: string,
    name: string
  ) => Promise<SingleUserResponse>;
  isLoading: boolean;
}

export type ProfileInfoItemType = {
  icon?: IconType;
  label?: string;
  value?: string;
};
