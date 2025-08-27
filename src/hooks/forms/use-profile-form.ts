import { useCallback, useEffect, useState } from 'react';
import { initialChangePasswordFormData } from '@/constants';
import { useUserData } from '@/hooks';
import type {
  ChangePasswordFormData,
  UseProfileFormReturn,
  UserType,
} from '@/types';

export function useProfileForm(user: UserType | null): UseProfileFormReturn {
  const { updateProfile, changePassword } = useUserData();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [userData, setUserData] = useState<UserType>({} as UserType);
  const [passwordData, setPasswordData] = useState<ChangePasswordFormData>(
    initialChangePasswordFormData
  );
  const isCpfLocked = !!user?.cpf;
  const isRgLocked = !!user?.rg;

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSocialInputChange = useCallback((name: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [name]: value,
      },
    }));
  }, []);

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPasswordData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPasswordModal(true);
  }, []);

  const handleSave = useCallback(
    async (
      currentPassword: string,
      action: 'profile' | 'password'
    ): Promise<{ success: boolean; message: string | undefined }> => {
      setShowPasswordModal(false);
      let success = false;
      let message: string | undefined;
      if (action === 'profile') {
        ({ success, message } = await updateProfile(
          userData,
          currentPassword.trim()
        ));
      } else if (action === 'password') {
        ({ success, message } = await changePassword(
          currentPassword.trim(),
          passwordData.password
        ));
      }

      return { success, message };
    },
    [userData, updateProfile, passwordData, changePassword]
  );

  return {
    userData,
    passwordData,
    handleInputChange,
    handlePasswordChange,
    handleSocialInputChange,
    handleSubmit,
    handleSave,
    isCpfLocked,
    isRgLocked,
    showPasswordModal,
    setShowPasswordModal,
  };
}
