import { User } from 'lucide-react';

export function UserItem() {
  return (
    <div className="group relative">
      <User className="w-5 cursor-pointer" />
      <div className="absolute right-0 hidden pt-4 group-hover:block">
        <div className="flex w-36 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500">
          <p className="cursor-pointer hover:text-black">My Profile</p>
          <p className="cursor-pointer hover:text-black">Orders</p>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      </div>
    </div>
  );
}
