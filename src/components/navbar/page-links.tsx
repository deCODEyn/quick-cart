import { NavLink } from 'react-router-dom';
import { links } from '@/constants';
import type { NavbarLinkInterface } from '@/types';

export function PageLinks({ isMobile = false, onClick }: NavbarLinkInterface) {
  return links.map((link) => (
    <li key={link.label}>
      <NavLink
        className="flex flex-col items-center justify-center gap-1 text-gray-900"
        onClick={onClick}
        to={link.href}
      >
        {({ isActive }) => (
          <>
            <p
              className={`uppercase transition-all ease-in-out ${isActive && isMobile ? 'inline-block border-gray-900 border-b-2' : ''} `}
            >
              {link.label}
            </p>
            {isActive && !isMobile && (
              <hr className="h-[2.5px] w-2/3 max-w-[45px] border-none bg-gray-700" />
            )}
          </>
        )}
      </NavLink>
    </li>
  ));
}
