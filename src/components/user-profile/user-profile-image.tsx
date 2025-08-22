import { Pencil } from 'lucide-react';
import { assets } from '@/assets';
import { Button, Image } from '@/components';
import { useAuthContext } from '@/context';

export function UserProfileImage() {
  const { user } = useAuthContext();
  const profileImage = user?.profileImage ? user.profileImage : assets.profile;

  const handleProfileImage = () => {
    //Lógica para edição da imagem do perfil.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('PROFILE IMAGE');
  };

  return (
    <div className="relative h-40 w-40 md:h-52 md:w-52">
      <Image
        alt="Placeholder"
        className="h-full w-full rounded-full"
        src={profileImage}
      />
      <Button
        className="absolute right-4 bottom-2 h-5 w-14 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-[0.6rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
        onClick={handleProfileImage}
      >
        <Pencil className="size-4" />
        edit
      </Button>
    </div>
  );
}
