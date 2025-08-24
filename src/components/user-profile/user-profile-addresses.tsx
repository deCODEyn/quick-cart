import { Plus } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { AddressCard, Button, Title } from '@/components';
import { useAddressData } from '@/hooks';
import type { AddressType } from '@/types';

export function UserProfileAddresses() {
  const { getUserAddresses } = useAddressData();
  const [addresses, setAddresses] = useState<AddressType[] | undefined>();

  const handleAddAddress = () => {
    //Lógica para icionar novo endereço.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('ADD ADDRESS');
  };

  const fetchAddresses = useCallback(async () => {
    setAddresses((await getUserAddresses()).result);
  }, [getUserAddresses]);

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
        <Button
          className="h-8 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-gray-900 text-xs uppercase hover:bg-gray-400 active:bg-gray-300"
          onClick={handleAddAddress}
        >
          <Plus className="size-4" /> Add Address
        </Button>
      </div>
    </div>
  );
}
