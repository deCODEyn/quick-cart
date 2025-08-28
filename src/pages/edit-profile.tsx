import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EditSocialMedia,
  Input,
  Label,
  LinkButton,
  LoadingData,
  NoUserFound,
  Title,
  ValidatePasswordModal,
} from '@/components';
import { useAuthContext } from '@/context';
import { useProfileForm, useToast } from '@/hooks';

export function EditProfile() {
  const { user, isAuthReady, fetchUser } = useAuthContext();
  const {
    userData,
    handleInputChange,
    handleSocialInputChange,
    handleSubmit,
    handleSave,
    isCpfLocked,
    isRgLocked,
    showPasswordModal,
    setShowPasswordModal,
  } = useProfileForm(user);
  const navigate = useNavigate();
  const { showSuccessToast } = useToast();
  const inputClass =
    'w-full rounded border border-gray-400 focus-visible:border-gray-500 focus-visible:ring-0';

  const handleSaveProfile = useCallback(
    async (password: string) => {
      const { success, message } = await handleSave(password);
      if (success) {
        await fetchUser();
        showSuccessToast(message || '');
        navigate('/profile');
        return;
      }
    },
    [handleSave, fetchUser, showSuccessToast, navigate]
  );

  if (!isAuthReady) {
    return <LoadingData data="user data" />;
  }

  if (!user) {
    return <NoUserFound />;
  }

  return (
    <div className="flex min-h-screen justify-center border-t bg-white p-8 pt-10 font-inter text-gray-800">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 font-bold text-3xl text-gray-900">
          <Title as="h1" span="profile" title="edit your" />
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="rounded border border-gray-200 bg-gray-50 p-6">
            <div className="flex flex-row justify-between gap-4 text-4xl">
              <h2 className="mb-4 font-semibold text-gray-900 text-xl">
                <Title span="information" title="personal" />
              </h2>
              {user.name}
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  className={inputClass}
                  id="firstName"
                  name="firstName"
                  onChange={handleInputChange}
                  value={userData.firstName || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  className={inputClass}
                  id="middleName"
                  name="middleName"
                  onChange={handleInputChange}
                  value={userData.middleName || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  className={inputClass}
                  id="lastName"
                  name="lastName"
                  onChange={handleInputChange}
                  value={userData.lastName || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  className={inputClass}
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleInputChange}
                  value={userData.phoneNumber || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  className={inputClass}
                  disabled={isCpfLocked}
                  id="cpf"
                  name="cpf"
                  onChange={handleInputChange}
                  value={userData.cpf || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rg">RG</Label>
                <Input
                  className={inputClass}
                  disabled={isRgLocked}
                  id="rg"
                  name="rg"
                  onChange={handleInputChange}
                  value={userData.rg || ''}
                />
              </div>
            </div>
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-6">
            <h2 className="mb-4 font-semibold text-gray-900 text-xl">
              <Title span="media" title="social" />
            </h2>
            <EditSocialMedia
              onChange={handleSocialInputChange}
              socialMedia={userData.socialMedia || {}}
            />
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-6">
            <h2 className="mb-4 font-semibold text-gray-900 text-xl">
              <Title span="email" title="" />
            </h2>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className={inputClass}
                id="email"
                name="email"
                onChange={handleInputChange}
                type="email"
                value={userData.email || ''}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <LinkButton
              className="h-10 cursor-pointer rounded border border-gray-400 bg-transparent px-10 py-4 text-gray-900 uppercase transition-colors hover:bg-gray-200"
              href="/profile"
              label="Cancel"
            />
            <Button
              className="h-10 cursor-pointer rounded bg-black px-10 py-4 text-sm text-white uppercase hover:bg-gray-700 active:bg-gray-500"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
        {showPasswordModal && (
          <ValidatePasswordModal
            onClose={() => setShowPasswordModal(false)}
            onConfirm={handleSaveProfile}
          />
        )}
      </div>
    </div>
  );
}
