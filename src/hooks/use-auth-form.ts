import { useCallback, useState } from 'react';
import { initialAuthFormData } from '@/constants';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';
import type {
  AuthFormData,
  UseAuthFormInterface,
  UseAuthFormReturn,
} from '@/types';

export function useAuthForm({
  isLogin = true,
  onSuccess,
}: UseAuthFormInterface): UseAuthFormReturn {
  const { authLogin, authRegister } = useAuthContext();
  const { showSuccessToast, showWarningToast } = useToast();
  const [formData, setFormData] = useState<AuthFormData>(initialAuthFormData);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
        if (formData.password !== formData.passwordValidate) {
          authSuccess = false;
          showWarningToast('Passwords do not match.');
          return;
        }
        if (!formData.name) {
          showWarningToast('Username is required.');
          return;
        }
        const { success, message } = await authRegister(
          formData.email,
          formData.password,
          formData.name
        );
        authSuccess = success;
        successMessage = message;
      }

      if (authSuccess) {
        showSuccessToast(successMessage);
        onSuccess();
        return;
      }
    },
    [
      isLogin,
      formData,
      authLogin,
      authRegister,
      onSuccess,
      showSuccessToast,
      showWarningToast,
    ]
  );

  return { formData, handleChange, onSubmit };
}
