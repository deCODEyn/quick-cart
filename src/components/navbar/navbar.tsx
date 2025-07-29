import { Link } from 'react-router-dom';
import { Image, NavbarItems, PageLinks } from '@/components';
import { assets } from '@/utils/assets';

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <Image alt="Company logo" className="h-10 w-36" src={assets.logo} />
      </Link>

      <ul className="hidden gap-5 text-gray-700 text-sm md:flex">
        <PageLinks />
      </ul>

      <NavbarItems />
    </div>
  );
}
