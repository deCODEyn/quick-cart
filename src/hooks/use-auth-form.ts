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
  onSuccess,
}: UseAuthFormInterface): UseAuthFormReturn {
  const { authLogin, authRegister, isLoading } = useAuthContext();
  const { showSuccessToast } = useToast();
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
        const { success, message } = await authLogin(
          formData.email,
          formData.password
        );
        authSuccess = success;
        successMessage = message;
      } else {
        const { success, message } = await authRegister(
          formData.email,
          formData.password,
          formData.name ?? ''
        );
        authSuccess = success;
        successMessage = message;
      }

      if (authSuccess) {
        showSuccessToast(successMessage);
        onSuccess();
      }
    },
    [isLogin, formData, authLogin, authRegister, onSuccess, showSuccessToast]
  );

  return { formData, handleChange, onSubmit, isLoading };
}
