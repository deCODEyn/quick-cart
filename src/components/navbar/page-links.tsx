import { NavLink } from 'react-router-dom';
import type { NavbarLinkInterface } from '@/types';
import { links } from '@/utils/constants';

export function PageLinks({ isMobile = false, onClick }: NavbarLinkInterface) {
  return links.map((link) => (
    <li key={link.label}>
      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${isActive && isMobile ? 'bg-black text-white' : ' text-gray-900'} `
        }
        onClick={onClick}
        to={link.href}
      >
        {({ isActive }) => (
          <>
            <p className="uppercase">{link.label}</p>
            <hr
              className={`h-[2.5px] w-2/3 border-none bg-gray-700 ${isActive && !isMobile ? 'block' : 'hidden'}`}
            />
          </>
        )}
      </NavLink>
    </li>
  ));
}
