import { Pencil } from 'lucide-react';
import {
  Button,
  ProfileInformatioSection,
  Title,
  UserProfileAddresses,
} from '@/components';

export function InformationProfileSection() {
  const handleProfileEdit = () => {
    //Lógica para edição do perfil.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('EDIT PROFILE');
  };

  return (
    <div className="rounded-md border bg-gray-50 p-5 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mx-2 text-xl md:text-2xl">
          <Title span="information" title="personal" />
        </h2>
        <Button
          className="-mt-3 h-8 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 font-bold text-[0.7rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
          onClick={handleProfileEdit}
        >
          <Pencil className="size-4" />
          edit
        </Button>
      </div>
      <ProfileInformatioSection />
      <UserProfileAddresses />
    </div>
  );
}
