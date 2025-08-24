import { useCallback, useRef, useState } from 'react';
import type { UseHandleImageReturn } from '@/types';

export function useHandleProfileImage(): UseHandleImageReturn {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
        setIsModalOpen(true);
      }
    },
    []
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return {
    fileInputRef,
    isModalOpen,
    selectedImage,
    handleOpenFileInput,
    handleImageChange,
    handleCloseModal,
  };
}
