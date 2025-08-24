import type { IconType } from 'react-icons/lib';
import type { SocialMediaType } from './auth';

export interface EditSocialMediaInterface {
  onChange: (name: string, value: string) => void;
  socialMedia: SocialMediaType
}

export interface ImageEditModalInterface {
  onClose: () => void;
  onSave: (blob: Blob) => Promise<void>;
  imageUrl: string;
}

export interface ValidatePasswordModalInterface {
  onClose: () => void;
  onConfirm: (password: string) => void;
}

export interface UseHandleImageReturn {
  handleCloseModal: () => void
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOpenFileInput: () => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
  isModalOpen: boolean
  selectedImage: string | null
}

export type ProfileInfoItemType = {
  icon?: IconType;
  label?: string;
  value?: string;
};
