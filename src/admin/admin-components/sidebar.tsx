import { CalendarRange, CirclePlus, ClipboardCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="min-h-screen w-[18%] border-gray-400 border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className={({ isActive }) =>
            `flex h-10 items-center gap-3 rounded-l border border-r-0 px-3 py-2 md:h-20 ${isActive ? 'border-[#C586A5] bg-[#FFEBF5]' : 'border-gray-300'}`
          }
          to="/admin/add"
        >
          <CirclePlus className="h-5 w-5" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex h-10 items-center gap-3 rounded-l border border-r-0 px-3 py-2 md:h-20 ${isActive ? 'border-[#C586A5] bg-[#FFEBF5]' : 'border-gray-300'}`
          }
          to="/admin/list"
        >
          <ClipboardCheck className="h-5 w-5" />
          <p className="hidden md:block">List Products</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex h-10 items-center gap-3 rounded-l border border-r-0 px-3 py-2 md:h-20 ${isActive ? 'border-[#C586A5] bg-[#FFEBF5]' : 'border-gray-300'}`
          }
          to="/admin/orders"
        >
          <CalendarRange className="h-5 w-5" />
          <p className="hidden md:block">Manage Orders</p>
        </NavLink>
      </div>
    </div>
  );
}
