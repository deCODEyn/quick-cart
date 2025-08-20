import { Link } from 'react-router-dom';
import { assets } from '@/assets';
import { Image, NavbarItems, PageLinks } from '@/components';
import { useAuthContext } from '@/context';

export function Navbar() {
  const { userRole } = useAuthContext();
  return (
    <div className="flex items-center justify-between py-4 font-medium">
      <Link to="/">
        <Image alt="Company logo" className="h-10 w-36" src={assets.logo} />
      </Link>

      <ul className="hidden gap-5 text-gray-700 text-sm md:flex">
        <PageLinks />
      </ul>
      {userRole === 'Admin' ? (
        <Link
          className="appearance-none rounded-full border-2 px-2 py-1 text-gray-400 hover:bg-gray-100"
          to="/admin"
        >
          Admin Panel
        </Link>
      ) : (
        ''
      )}
      <NavbarItems />
    </div>
  );
}
