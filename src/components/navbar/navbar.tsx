import { NavbarItems, PageLinks } from '@/components';

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <h1>Logo</h1>

      <ul className="hidden gap-5 text-gray-700 text-sm md:flex">
        <PageLinks />
      </ul>

      <NavbarItems />
    </div>
  );
}
