import { CartItem, MobileMenu, SearchItem, UserItem } from '@/components';

export function NavbarItems() {
  return (
    <div className="flex items-center gap-6">
      <SearchItem />
      <UserItem />
      <CartItem />
      <MobileMenu />
    </div>
  );
}
