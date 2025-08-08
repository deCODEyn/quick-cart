import { Link } from 'react-router-dom';
import { Button, Image } from '@/components';
import { assets } from '@/utils/assets';

export function AdminNavbar() {
  return (
    <div className="flex h-18 items-center justify-between px-[4%] py-2">
      <Image
        alt="Administrative Logo"
        className="w-[max(15%,80px)]"
        src={assets.admin_logo}
      />
      <Link to="/">
        <Button className="cursor-pointer rounded-full bg-gray-600 px-5 py-2 text-white text-xs hover:bg-gray-800 sm:text-sm md:px-7">
          Logout
        </Button>
      </Link>
    </div>
  );
}
