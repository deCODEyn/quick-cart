import { useCallback, useState } from 'react';
import { initialAuthFormData } from '@/constants';
import { useAuthContext } from '@/context';
import type {
  AuthFormData,
  UseAuthFormInterface,
  UseAuthFormReturn,
} from '@/types';
import { useToast } from './use-toast';

export function useAuthForm({
  isLogin = true,
  isAdmin = false,
  onSuccess,
}: UseAuthFormInterface): UseAuthFormReturn {
  const { authLogin, authRegister, isLoading } = useAuthContext();
  const { showSuccessToast, showInfoToast } = useToast();
  const [formData, setFormData] = useState<AuthFormData>(initialAuthFormData);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let authSuccess: boolean;
      let successMessage: string;

      if (isLogin) {
        authSuccess = await authLogin(formData.email, formData.password);
        successMessage = 'Welcome back!';
      } else {
        authSuccess = await authRegister(
          formData.email,
          formData.password,
          formData.name ?? ''
        );
        successMessage = 'User registered successfully.';
      }

      if (authSuccess) {
        !isAdmin && showSuccessToast(successMessage);
        onSuccess();
      } else {
        showInfoToast('An error occurred. Please try again.');
      }
    },
    [
      isLogin,
      isAdmin,
      formData,
      authLogin,
      authRegister,
      onSuccess,
      showSuccessToast,
      showInfoToast,
    ]
  );

  return { formData, handleChange, onSubmit, isLoading };
}
