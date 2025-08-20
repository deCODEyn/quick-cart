import { Pencil } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import {
  Button,
  ProfileInfoItem,
  Title,
  UserProfileAddresses,
} from '@/components';
import { mockUserProfile } from '@/constants/mock-user-profile';

export function InformationProfileSection() {
  const handleProfileEdit = () => {
    //Lógica para edição do perfil.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('EDIT PROFILE');
  };

  return (
    <div className="rounded-md border bg-gray-50 p-5 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl">
          <Title span="information" title="personal " />
        </h2>
        <Button
          className="cursor-pointer border-none bg-gray-200 text-[0.6rem] text-gray-900 uppercase hover:bg-gray-300 active:bg-gray-400"
          onClick={handleProfileEdit}
        >
          <Pencil className="-mr-1 size-4" />
          edit profile
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProfileInfoItem label="CPF" value={mockUserProfile?.cpf} />
        <ProfileInfoItem label="RG" value={mockUserProfile?.rg} />
        <ProfileInfoItem icon={FaPhone} value={mockUserProfile?.phoneNumber} />
        <ProfileInfoItem
          icon={FaWhatsapp}
          value={mockUserProfile.socialMedia?.whatsApp}
        />
        <ProfileInfoItem
          icon={FaInstagram}
          value={mockUserProfile.socialMedia?.instagram}
        />
        <ProfileInfoItem
          icon={FaFacebook}
          value={mockUserProfile.socialMedia?.facebook}
        />
        <ProfileInfoItem
          icon={FaLinkedin}
          value={mockUserProfile.socialMedia?.linkedIn}
        />
        <ProfileInfoItem
          icon={FaXTwitter}
          value={mockUserProfile.socialMedia?.X}
        />
      </div>
      <UserProfileAddresses />
    </div>
  );
}
