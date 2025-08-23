import { useLocation } from 'react-router-dom';
import {
  InformationProfileSection,
  LatestOrdersSection,
  LinkButton,
  MyProfileSection,
} from '@/components';
import { useAuthContext } from '@/context';

export function UserProfile() {
  const { user } = useAuthContext();
  const location = useLocation();

  return (
    <div className="min-h-screen border-t pt-10 font-inter">
      {user ? (
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <MyProfileSection />
          <InformationProfileSection />
          <LatestOrdersSection />
        </div>
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center gap-10 text-3xl text-gray-800">
          Sign in to your QuickCart account to get started.
          <LinkButton
            href="/login"
            label=" sign in"
            state={{ from: location.pathname }}
          />
        </div>
      )}
    </div>
  );
}
