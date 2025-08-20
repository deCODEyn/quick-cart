import { NavLink } from 'react-router-dom';
import type { SidebarItemType } from '@/admin/admin-types';

export function SidebarItem({ to, icon, label }: SidebarItemType) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex h-10 items-center gap-3 rounded-l border-2 border-r-0 px-3 py-2 md:h-20 ${isActive ? 'border-gray-600 bg-gray-200' : 'border-gray-300 hover:bg-gray-200'}`
      }
      to={to}
    >
      {icon}
      <p className="hidden md:block">{label}</p>
    </NavLink>
  );
}
