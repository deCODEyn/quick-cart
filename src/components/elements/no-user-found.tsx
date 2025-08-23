import { useLocation } from 'react-router-dom';
import { LinkButton } from '@/components';

export function NoUserFound() {
  const location = useLocation();

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-10 text-3xl text-gray-800">
      Sign in to your QuickCart account to get started.
      <LinkButton
        href="/login"
        label=" sign in"
        state={{ from: location.pathname }}
      />
    </div>
  );
}
