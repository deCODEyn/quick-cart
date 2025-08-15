import { CalendarRange, CirclePlus, ClipboardCheck } from 'lucide-react';
import { SidebarItem } from '@/admin/admin-components';

export function Sidebar() {
  return (
    <div className="min-h-screen w-[18%] border-gray-500 border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <SidebarItem
          icon={<CirclePlus className="h-5 w-5" />}
          label="Add Items"
          to="/admin/create"
        />
        <SidebarItem
          icon={<ClipboardCheck className="h-5 w-5" />}
          label="List Products"
          to="/admin/list"
        />
        <SidebarItem
          icon={<CalendarRange className="h-5 w-5" />}
          label="Manage Orders"
          to="/admin/orders"
        />
      </div>
    </div>
  );
}
