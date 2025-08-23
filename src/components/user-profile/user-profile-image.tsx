import { Pencil } from 'lucide-react';
import { useRef, useState } from 'react';
import { assets } from '@/assets';
import { Button, Image, ImageEditModal, Input } from '@/components';
import { useAuthContext } from '@/context';
import { useProfileData } from '@/hooks/use-profile-data';

export function UserProfileImage() {
  const { user } = useAuthContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const setProfileImage = useProfileData();

  const handleProfileImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsModalOpen(true);
    }
  };

  const handleSaveImage = (croppedBlob: Blob) => {
    setProfileImage(croppedBlob);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
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
          onClick={handleProfileImage}
        >
          <Pencil className="size-4" />
          edit
        </Button>
      </div>
      {isModalOpen && selectedImage && (
        <ImageEditModal
          imageUrl={selectedImage}
          onClose={handleCloseModal}
          onSave={handleSaveImage}
        />
      )}
    </>
  );
}
