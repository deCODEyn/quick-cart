import { Plus } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { AddressCard, LinkButton, Title } from '@/components';
import { useAddressData } from '@/hooks';
import type { AddressType } from '@/schemas';

export function UserProfileAddresses() {
  const { listAddresses } = useAddressData();
  const [addresses, setAddresses] = useState<AddressType[] | undefined>();

  const fetchAddresses = useCallback(async () => {
    setAddresses((await listAddresses()).result);
  }, [listAddresses]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return (
    <div className="mt-12">
      <h3 className="my-5 text-lg md:text-xl">
        <Title as="h3" span="addresses" title="registered" />
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {addresses?.map((address) => (
          <AddressCard address={address} key={address._id} />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        <LinkButton
          className="h-8 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-gray-900 text-xs uppercase hover:bg-gray-400 active:bg-gray-300"
          href="/address/add"
          label="Add Address"
        >
          <Plus className="size-4" />
        </LinkButton>
      </div>
    </div>
  );
}
