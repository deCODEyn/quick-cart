import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, PasswordInputs, ValidatePasswordModal } from '@/components';
import { initialChangePasswordFormData } from '@/constants';
import { useProfileForm, useToast } from '@/hooks';
import { type ChangePasswordType, changePasswordSchema } from '@/schemas';

export function ChangePassword() {
  const navigate = useNavigate();
  const { showSuccessToast } = useToast();
  const {
    handlePasswordChange,
    handleSave,
    showPasswordModal,
    setShowPasswordModal,
  } = useProfileForm(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: initialChangePasswordFormData,
  });

  const handleSavePassword = useCallback(
    async (password: string) => {
      const { success, message } = await handleSave(password);
      if (success) {
        showSuccessToast(message || '');
        navigate('/profile');
        return;
      }
    },
    [handleSave, showSuccessToast, navigate]
  );

  return (
    <div className="border-t">
      <form
        className="m-auto mt-14 flex w-[90%] flex-col items-center gap-3 text-gray-800 sm:max-w-96"
        onSubmit={handleSubmit(handlePasswordChange)}
      >
        <div className="mt-10 mb-2 inline-flex items-center gap-2">
          <h1 className="prata-regular text-3xl">Change Password</h1>
          <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
        </div>
        <PasswordInputs
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
          errors={errors}
          needConfirm={true}
          register={register}
        />
        <Button className="mt-2 h-10 rounded-md bg-black px-8 py-2 font-light text-white uppercase hover:bg-gray-600">
          Change Password
        </Button>
      </form>
      {showPasswordModal && (
        <ValidatePasswordModal
          onClose={() => setShowPasswordModal(false)}
          onConfirm={handleSavePassword}
        />
      )}
    </div>
  );
}
