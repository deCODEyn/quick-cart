import type { IconType } from 'react-icons/lib';
import type { SocialMediaType, UserType } from '@/types';

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

export interface ValidatePasswordModalInterface {
  onClose: () => void;
  onConfirm: (password: string) => void;
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
  handleSave: (
    password: string
  ) => Promise<{ success: boolean; message: string | undefined }>;
  handleSocialInputChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowPasswordModal: (show: boolean) => void;
  isCpfLocked: boolean;
  isRgLocked: boolean;
  showPasswordModal: boolean;
  userData: UserType;
}

export type ProfileInfoItemType = {
  icon?: IconType;
  label?: string;
  value?: string;
};
