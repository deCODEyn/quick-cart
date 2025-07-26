import { SearchIcon, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileMenu, UserItem } from '@/components';

export function NavbarItems() {
  return (
    <div className="flex items-center gap-6">
      <SearchIcon className="w-5 cursor-pointer" />
      <UserItem />
      <Link className="relative" to="/cart">
        <ShoppingCart className="w-5 min-w-5 cursor-pointer" />
        <p className="absolute right-[-5px] bottom-[12px] aspect-square w-4 rounded-full bg-green-800 text-center text-[8px] text-white leading-4">
          10
        </p>
      </Link>
      <MobileMenu />
    </div>
  );
}
