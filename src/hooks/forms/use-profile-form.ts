import { useCallback, useEffect, useState } from 'react';
import { useUserData } from '@/hooks';
import type { ChangePasswordType } from '@/schemas/user-schema';
import type { UseProfileFormReturn, UserType } from '@/types';

export function useProfileForm(user: UserType | null): UseProfileFormReturn {
  const { updateProfile, changePassword } = useUserData();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [userData, setUserData] = useState<UserType>({} as UserType);
  const [passwordData, setPasswordData] = useState<ChangePasswordType | null>(
    null
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

  const handlePasswordChange = useCallback((data: ChangePasswordType) => {
    setPasswordData(data);
    setShowPasswordModal(true);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPasswordModal(true);
  }, []);

  const handleSave = useCallback(
    async (
      currentPassword: string
    ): Promise<{ success: boolean; message: string | undefined }> => {
      setShowPasswordModal(false);
      let success = false;
      let message: string | undefined;
      if (passwordData) {
        ({ success, message } = await changePassword(
          currentPassword,
          passwordData.password
        ));
      }
      ({ success, message } = await updateProfile(
        userData,
        currentPassword.trim()
      ));

      return { success, message };
    },
    [userData, updateProfile, passwordData, changePassword]
  );

  return {
    userData,
    handleInputChange,
    handleSocialInputChange,
    handlePasswordChange,
    handleSubmit,
    handleSave,
    isCpfLocked,
    isRgLocked,
    showPasswordModal,
    setShowPasswordModal,
  };
}
