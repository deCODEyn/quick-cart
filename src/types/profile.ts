import type { IconType } from 'react-icons/lib';

export interface ImageEditModalInterface {
  onClose: () => void;
  onSave: (blob: Blob) => Promise<void>;
  imageUrl: string;
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
