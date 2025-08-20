import { User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';

export function UserItem() {
  const { authLogout, userRole } = useAuthContext();
  const { showSuccessToast, showWarningToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    const logoutSuccess = await authLogout();
    if (logoutSuccess) {
      showSuccessToast('Logged out successfully.');
      navigate('/');
    } else {
      showWarningToast('Logged out error.');
    }
  };

  if (!userRole) {
    return (
      <Link state={{ from: location.pathname }} to="/login">
        <User className="w-6 cursor-pointer" />
      </Link>
    );
  }

  return (
    <div className="group relative">
      <div className="cursor-pointer">
        <User className="w-6 cursor-pointer" />
      </div>
      <div className="absolute right-0 hidden pt-4 group-hover:block">
        <div className="flex w-36 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500">
          <Link className="cursor-pointer hover:text-black" to="/profile">
            My Profile
          </Link>
          <Link className="cursor-pointer hover:text-black" to="/orders">
            Orders
          </Link>
          <Button
            className="my-[-8px] cursor-pointer appearance-none justify-start border-none bg-transparent p-0 text-base text-current shadow-none hover:bg-transparent hover:text-black focus:outline-none focus-visible:ring-0"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
