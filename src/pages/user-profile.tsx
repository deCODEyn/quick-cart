import {
  InformationProfileSection,
  LatestOrdersSection,
  MyProfileSection,
} from '@/components';

export function UserProfile() {
  return (
    <div className="min-h-screen border-t pt-10 font-inter">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <MyProfileSection />
        <InformationProfileSection />
        <LatestOrdersSection />
      </div>
    </div>
  );
}
