import { Lock, LogOut, Mail, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button, Image, Title } from '@/components';
import { mockUserProfile } from '@/constants/mock-user-profile';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';

export function MyProfileSection() {
  const { authLogout } = useAuthContext();
  const { showSuccessToast, showWarningToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutSuccess = await authLogout();
    if (logoutSuccess) {
      showSuccessToast('Logged out successfully.');
      navigate('/');
    } else {
      showWarningToast('Logged out error.');
    }
  };

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
    <div className="mb-2 flex flex-col items-center gap-6 rounded-sm border bg-gray-100 p-4 shadow-md md:flex-row md:items-start">
      <div className="flex w-full flex-shrink-0 flex-col items-center text-gray-900 md:w-1/3">
        <div className="relative h-40 w-40 md:h-52 md:w-52">
          <Image
            alt="Placeholder"
            className="h-full w-full rounded-full"
            src="https://placehold.co/80x80/A0A0A0/ffffff?text=IMAGE"
          />
          <Button
            className="absolute right-4 bottom-2 h-5 w-14 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-[0.6rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
            onClick={handleProfileImage}
          >
            <Pencil className="size-4" />
            edit
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-center md:w-2/3">
        <h1 className="font-semibold text-3xl md:text-left">
          <Title as="h1" span="profile" title="my" />
        </h1>
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
        <div className="mt-6 flex w-full flex-row justify-end gap-6">
          <Button
            className="h-5 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-[0.6rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
            onClick={handleChangePass}
          >
            <Lock className="size-4" />
            change pass
          </Button>
          <Button
            className="h-5 cursor-pointer rounded border border-red-600 bg-red-300 px-2 py-1 text-[0.6rem] text-gray-900 uppercase hover:bg-red-400 active:bg-red-200"
            onClick={handleLogout}
          >
            <LogOut className="size-4" />
            logout
          </Button>
        </div>
      </div>
    </div>
  );
}
