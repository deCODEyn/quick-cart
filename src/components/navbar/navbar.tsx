import { Link } from 'react-router-dom';
import { assets } from '@/assets';
import { Image, NavbarItems, PageLinks } from '@/components';

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <Image alt="Company logo" className="h-10 w-36" src={assets.logo} />
      </Link>

      <ul className="hidden gap-5 text-gray-700 text-sm md:flex">
        <PageLinks />
      </ul>
      <Link
        className="m-0 w-auto appearance-none rounded-3xl border-2 p-2 text-gray-400 hover:bg-gray-100"
        to="/admin"
      >
        Admin Panel
      </Link>
      <NavbarItems />
    </div>
  );
}
