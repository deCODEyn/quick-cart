import { Link } from 'react-router-dom';
import {
  InformationProfileSection,
  LatestOrdersSection,
  MyProfileSection,
} from '@/components';
import { useAuthContext } from '@/context';

export function UserProfile() {
  const { user } = useAuthContext();

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
          <Link
            className="h-11 cursor-pointer rounded bg-gray-900 px-6 py-3 text-sm text-white uppercase hover:bg-gray-700 active:bg-gray-500"
            to="/login"
          >
            sign in
          </Link>
        </div>
      )}
    </div>
  );
}
