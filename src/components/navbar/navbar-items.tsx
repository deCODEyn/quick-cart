import {
  CartItem,
  MobileMenu,
  ProfileUserItem,
  SearchItem,
} from '@/components';

export function NavbarItems() {
  return (
    <div className="flex items-center gap-6">
      <SearchItem />
      <ProfileUserItem />
      <CartItem />
      <MobileMenu />
    </div>
  );
}
