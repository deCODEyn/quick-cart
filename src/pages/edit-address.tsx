import { useLocation } from 'react-router-dom';
import { AddressForm, LoadingData, Title } from '@/components';
import { useAddressForm } from '@/hooks';
import type { AddressType } from '@/schemas';

export function EditAddress() {
  const address = useLocation().state.address as AddressType;
  const { form, onSubmit, isLoading } = useAddressForm(address, true);

  if (!address) {
    return <LoadingData data="address data" />;
  }

  return (
    <div className="border-t p-4 pt-12">
      <h1 className="mb-4 font-bold text-2xl">
        <Title as="h1" span="address" title="edit" />
      </h1>
      <AddressForm
        form={form}
        isEditMode
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </div>
  );
}
