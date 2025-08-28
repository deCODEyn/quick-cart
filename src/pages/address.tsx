import { AddressForm, Title } from '@/components';

export function AddAddress() {
  return (
    <div className="border-t p-4 pt-12">
      <h1 className="mb-4 font-bold text-2xl">
        <Title as="h1" span="new address" title="add" />
      </h1>
      <AddressForm isEditMode={false} />
    </div>
  );
}
