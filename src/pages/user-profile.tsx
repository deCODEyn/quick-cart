import {
  InformationProfileSection,
  LatestOrdersSection,
  MyProfileSection,
  NoUserFound,
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
        <NoUserFound />
      )}
    </div>
  );
}
