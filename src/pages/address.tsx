import { AddressForm } from '@/components';

export function AddAddress() {
  return (
    <div className="p-4">
      <h1 className="mb-4 font-bold text-2xl">Add New Address</h1>
      <AddressForm isEditMode={false} />
    </div>
  );
}
