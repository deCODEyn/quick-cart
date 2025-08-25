import { useCallback, useEffect, useState } from 'react';
import type { UseProfileFormReturn, UserType } from '@/types';
import { useUserData } from '../api-data/use-user-data';

export function useProfileForm(user: UserType | null): UseProfileFormReturn {
  const { userLogin, updateProfile } = useUserData();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [userData, setUserData] = useState<UserType>({} as UserType);
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

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPasswordModal(true);
  }, []);

  const handleSave = useCallback(
    async (
      password: string
    ): Promise<{ success: boolean; message: string | undefined }> => {
      const validate = await userLogin(userData.email, password);
      if (validate.success) {
        setShowPasswordModal(false);
        const { success, message } = await updateProfile(userData);
        return { success, message };
      }
      return { success: false, message: 'Password does not match' };
    },
    [userData, userLogin, updateProfile]
  );

  return {
    userData,
    handleInputChange,
    handleSocialInputChange,
    handleSubmit,
    handleSave,
    isCpfLocked,
    isRgLocked,
    showPasswordModal,
    setShowPasswordModal,
  };
}
