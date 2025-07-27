import { NavLink } from 'react-router-dom';
import type { NavbarLinkType, PageLinksType } from '@/types';

export function PageLinks({ isMobile = false, onClick }: NavbarLinkType) {
  const links: PageLinksType[] = [
    { label: 'home', href: '/' },
    { label: 'collection', href: '/collection' },
    { label: 'about', href: '/about' },
    { label: 'contact', href: '/contact' },
  ];

  return links.map((link) => (
    <li key={link.label}>
      <NavLink
        className="flex flex-col items-center gap-1 text-gray-900"
        onClick={onClick}
        to={link.href}
      >
        {({ isActive }) => (
          <>
            <p>{link.label.toUpperCase()}</p>
            <hr
              className={`h-[2.5px] w-2/3 border-none bg-gray-700 ${isActive && !isMobile ? 'block' : 'hidden'}`}
            />
          </>
        )}
      </NavLink>
    </li>
  ));
}
