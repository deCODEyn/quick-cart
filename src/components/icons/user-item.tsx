import { User } from 'lucide-react';
import { Link, type LinkProps } from 'react-router-dom';

export function UserItem({ to, state }: LinkProps) {
  return (
    <Link state={state} to={to}>
      <User className="w-6 cursor-pointer" />
    </Link>
  );
}
