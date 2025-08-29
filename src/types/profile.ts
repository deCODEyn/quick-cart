import type { UseFormRegister } from 'react-hook-form';
import type { IconType } from 'react-icons/lib';
import type { ChangePasswordType, SocialMediaType, UserType } from '@/schemas';
import type { SingleUserResponse } from '@/types';

export interface EditSocialMediaInterface {
  register: UseFormRegister<UserType>;
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

export type UseProfileReturn = {
  closeModal: () => void;
  handleConfirm: (password: string) => Promise<{
    success: boolean;
    message?: string | undefined;
  }>;
  startPasswordChange: (
    data: ChangePasswordType,
    onSuccess: (message?: string | undefined) => void
  ) => void;
  startProfileUpdate: (
    data: UserType,
    onSuccess: (message?: string) => void
  ) => void;
  isRgLocked: boolean;
  isCpfLocked: boolean;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  showPasswordModal: boolean;
  userData: UserType;
};

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
