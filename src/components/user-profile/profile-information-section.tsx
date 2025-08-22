import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import { useAuthContext } from '@/context';
import { ProfileInfoItem } from './profile-info-item';

export function ProfileInformatioSection() {
  const { user } = useAuthContext();
  const fullName = [user?.firstName, user?.middleName, user?.lastName]
    .filter(Boolean)
    .join(' ');

  return (
    <div className=" flex flex-col gap-8">
      <ProfileInfoItem label="Name" value={fullName} />
      <div className="grid grid-cols-2 gap-5">
        <ProfileInfoItem label="CPF" value={user?.cpf} />
        <ProfileInfoItem label="RG" value={user?.rg} />
        <ProfileInfoItem icon={FaPhone} value={user?.phoneNumber} />
        <ProfileInfoItem
          icon={FaWhatsapp}
          value={user?.socialMedia?.whatsApp}
        />
        <ProfileInfoItem
          icon={FaInstagram}
          value={user?.socialMedia?.instagram}
        />
        <ProfileInfoItem
          icon={FaFacebook}
          value={user?.socialMedia?.facebook}
        />
        <ProfileInfoItem
          icon={FaLinkedin}
          value={user?.socialMedia?.linkedIn}
        />
        <ProfileInfoItem icon={FaXTwitter} value={user?.socialMedia?.X} />
      </div>
    </div>
  );
}
