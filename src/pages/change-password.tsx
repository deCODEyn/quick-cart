import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, PasswordInputs, ValidatePasswordModal } from '@/components';
import { useProfileForm, useToast } from '@/hooks';

export function ChangePassword() {
  const {
    passwordData,
    handlePasswordChange,
    handleSubmit,
    handleSave,
    showPasswordModal,
    setShowPasswordModal,
  } = useProfileForm(null);
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useToast();

  const handleSavePassword = useCallback(
    async (password: string) => {
      const { success, message } = await handleSave(password, 'password');
      if (success) {
        showSuccessToast(message || '');
        navigate('/profile');
        return;
      }
    },
    [handleSave, showSuccessToast, navigate]
  );

  const handleSubmitPassword = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (passwordData.password === passwordData.passwordValidate) {
        handleSubmit(e);
      }
      showErrorToast('New passwords do not match.');
    },
    [passwordData, showErrorToast, handleSubmit]
  );

  return (
    <div className="border-t">
      <form
        className="m-auto mt-14 flex w-[90%] flex-col items-center gap-3 text-gray-800 sm:max-w-96"
        onSubmit={handleSubmitPassword}
      >
        <div className="mt-10 mb-2 inline-flex items-center gap-2">
          <h1 className="prata-regular text-3xl">Change Password</h1>
          <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
        </div>
        <PasswordInputs
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
          formData={passwordData}
          handleChange={handlePasswordChange}
          needConfirm={true}
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
