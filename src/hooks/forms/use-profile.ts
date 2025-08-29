import { useCallback, useEffect, useState } from 'react';
import { useConfirmPasswordModal, useUserData } from '@/hooks';
import type { ChangePasswordType, UserType } from '@/schemas';
import type { UseProfileReturn } from '@/types';

export function useProfile(user: UserType | null): UseProfileReturn {
  const { updateProfile, changePassword } = useUserData();
  const [userData, setUserData] = useState<UserType>({} as UserType);
  const { showPasswordModal, openModal, handleConfirm, closeModal } =
    useConfirmPasswordModal<{ success: boolean; message?: string }>();
  const isCpfLocked = !!user?.cpf;
  const isRgLocked = !!user?.rg;

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const startProfileUpdate = useCallback(
    (data: UserType, onSuccess: (message?: string) => void) => {
      openModal(async (currentPassword) => {
        const { success, message } = await updateProfile(data, currentPassword);
        if (success) {
          onSuccess(message);
        }
        return { success, message };
      });
    },
    [updateProfile, openModal]
  );

  const startPasswordChange = useCallback(
    (data: ChangePasswordType, onSuccess: (message?: string) => void) => {
      openModal(async (currentPassword) => {
        const { success, message } = await changePassword(
          currentPassword,
          data.password
        );
        if (success) {
          onSuccess(message);
        }
        return { success, message };
      });
    },
    [changePassword, openModal]
  );

  return {
    userData,
    setUserData,
    isCpfLocked,
    isRgLocked,
    showPasswordModal,
    closeModal,
    handleConfirm,
    startProfileUpdate,
    startPasswordChange,
  };
}
