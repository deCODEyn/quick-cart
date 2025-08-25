import { Pencil } from 'lucide-react';
import { assets } from '@/assets';
import { Button, Image, ImageEditModal, Input } from '@/components';
import { useAuthContext } from '@/context';
import { useHandleProfileImage, useToast, useUserData } from '@/hooks';

export function UserProfileImage() {
  const { user, fetchUser } = useAuthContext();
  const { setProfileImage, isLoading } = useUserData();
  const { showSuccessToast } = useToast();
  const {
    fileInputRef,
    isModalOpen,
    selectedImage,
    handleOpenFileInput,
    handleImageChange,
    handleCloseModal,
  } = useHandleProfileImage();

  const handleSave = async (croppedBlob: Blob) => {
    const { success, message } = await setProfileImage(croppedBlob);
    handleCloseModal();
    if (success) {
      await fetchUser();
      showSuccessToast(message || 'Image uploaded successfully');
    }
  };

  return (
    <div className="relative h-40 w-40 md:h-52 md:w-52">
      <Image
        alt="Profile image"
        className="h-full w-full rounded-full border border-gray-600"
        src={user?.profileImage ?? assets.profile}
      />
      <Input
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        ref={fileInputRef}
        type="file"
      />
      <Button
        className="absolute right-4 bottom-2 h-6 w-14 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-[0.6rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
        onClick={handleOpenFileInput}
      >
        <Pencil className="size-4" />
        edit
      </Button>
      {isModalOpen && selectedImage && (
        <ImageEditModal
          imageUrl={selectedImage}
          isLoading={isLoading}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
