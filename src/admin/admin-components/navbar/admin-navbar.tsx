import { Link } from 'react-router-dom';
import { assets } from '@/assets';
import { Button, Image } from '@/components';

export function AdminNavbar() {
  return (
    <div className="flex h-15 items-center justify-between px-[4%] py-2">
      <Link className="w-[max(15%,80px)]" to="/admin">
        <Image alt="Administrative Panel Logo" src={assets.admin_logo} />
      </Link>
      <Link to="/">
        <Button className="cursor-pointer rounded-full bg-gray-600 px-5 text-white text-xs uppercase hover:bg-gray-800 sm:text-sm md:px-7">
          Exit
        </Button>
      </Link>
    </div>
  );
}
