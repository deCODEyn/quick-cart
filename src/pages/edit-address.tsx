import { useLocation } from 'react-router-dom';
import { AddressForm, LoadingData, Title } from '@/components';
import type { AddressType } from '@/types';

export function EditAddress() {
  const address = useLocation().state.address as AddressType;

  if (!address) {
    return <LoadingData data="address data" />;
  }

  return (
    <div className="border-t p-4 pt-12">
      <h1 className="mb-4 font-bold text-2xl">
        <Title as="h1" span="address" title="edit" />
      </h1>
      <AddressForm initialData={address} isEditMode={true} />
    </div>
  );
}
