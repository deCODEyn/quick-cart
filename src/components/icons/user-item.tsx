import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function UserItem() {
  return (
    <div className="group relative">
      <Link to="/login">
        <User className="w-6 cursor-pointer" />
      </Link>
      <div className="absolute right-0 hidden pt-4 group-hover:block">
        <div className="flex w-36 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500">
          <p className="cursor-pointer hover:text-black">My Profile</p>
          <Link className="cursor-pointer hover:text-black" to="/orders">
            Orders
          </Link>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      </div>
    </div>
  );
}
