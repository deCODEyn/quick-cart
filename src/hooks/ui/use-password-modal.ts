import { useCallback, useState } from 'react';
import type { ConfirmPasswordFn, UseConfirmPasswordModalReturn } from '@/types';

export function useConfirmPasswordModal<
  T = void,
>(): UseConfirmPasswordModalReturn<T> {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [onConfirm, setOnConfirm] = useState<ConfirmPasswordFn<T> | null>(null);

  const openModal = useCallback((action: ConfirmPasswordFn<T>) => {
    setOnConfirm(() => action);
    setShowPasswordModal(true);
  }, []);

  const handleConfirm = useCallback(
    async (password: string): Promise<T> => {
      if (!onConfirm) {
        return undefined as T;
      }
      const result = await onConfirm(password);
      setShowPasswordModal(false);
      return result as T;
    },
    [onConfirm]
  );

  const closeModal = useCallback(() => setShowPasswordModal(false), []);

  return {
    showPasswordModal,
    openModal,
    handleConfirm,
    closeModal,
  };
}
