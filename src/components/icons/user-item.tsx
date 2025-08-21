import { User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '@/context';

export function UserItem() {
  const { userRole } = useAuthContext();
  const location = useLocation();

  const linkTo = userRole ? '/profile' : '/login';
  const linkState = userRole ? undefined : { from: location.pathname };

  return (
    <Link state={linkState} to={linkTo}>
      <User className="w-6 cursor-pointer" />
    </Link>
  );
}
