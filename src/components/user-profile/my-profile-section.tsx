import { Mail, Pencil } from 'lucide-react';
import { Button, Image, Title } from '@/components';
import { mockUserProfile } from '@/constants/mock-user-profile';

export function MyProfileSection() {
  const handleChangePass = () => {
    //Lógica para alteração de senha.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('CHANGE PASS');
  };

  const handleProfileImage = () => {
    //Lógica para edição da imagem do perfil.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('PROFILE IMAGE');
  };

  return (
    <div className="flex flex-col items-center gap-6 rounded-sm border bg-gray-100 p-4 md:flex-row md:items-start">
      <div className="flex w-full flex-shrink-0 flex-col items-center md:w-1/3">
        <div className="relative h-40 w-40 md:h-52 md:w-52">
          <Image
            alt="Placeholder"
            className="h-full w-full rounded-full"
            src="https://placehold.co/80x80/6366f1/ffffff?text=IMAGE"
          />
          <Button
            className="absolute right-0 bottom-1 h-6 w-14 cursor-pointer border-none bg-black text-center text-[0.65rem] uppercase shadow-none hover:bg-gray-700 md:h-7 md:w-15 md:text-xs"
            onClick={handleProfileImage}
          >
            <Pencil className="-mr-1 size-4 text-white" />
            edit
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-center md:w-2/3">
        <h2 className="text-3xl md:text-left">
          <Title span="profile" title="my" />
        </h2>
        <p className="text-base text-gray-500">
          Welcome to
          <span className="mx-1 font-bold">QuickCart E-commerce!</span>
        </p>
        <p className="mt-5 text-2xl text-gray-800">
          {mockUserProfile.fullName}
        </p>
        <p className="my-2 flex items-center gap-2 text-center text-gray-600">
          <Mail size={16} /> {mockUserProfile.email}
        </p>
        <div className="mt-2 flex w-full flex-row justify-end">
          <Button
            className="cursor-pointer text-[0.6rem] uppercase"
            onClick={handleChangePass}
          >
            change pass
          </Button>
        </div>
      </div>
    </div>
  );
}
