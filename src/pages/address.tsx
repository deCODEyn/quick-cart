import { AddressForm, Title } from '@/components';
import { useAddressForm } from '@/hooks';

export function AddAddress() {
  const { form, onSubmit, isLoading } = useAddressForm();
  return (
    <div className="border-t p-4 pt-12">
      <h1 className="mb-4 font-bold text-2xl">
        <Title as="h1" span="new address" title="add" />
      </h1>
      <AddressForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
    </div>
  );
}
