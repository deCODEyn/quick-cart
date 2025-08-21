import { Pencil, Plus } from 'lucide-react';
import { Button, Title } from '@/components';
import { mockUserProfile } from '@/constants/mock-user-profile';

export function UserProfileAddresses() {
  const handleAddressEdit = () => {
    //Lógica para editar endereço.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('EDIT ADDRESS');
  };
  const handleAddAddress = () => {
    //Lógica para icionar novo endereço.
    // biome-ignore lint/suspicious/noConsole: dev
    console.log('ADD ADDRESS');
  };

  return (
    <div className="mt-12">
      <h3 className="my-5 text-lg md:text-xl">
        <Title as="h3" span="addresses" title="registered" />
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockUserProfile.addresses.map((addr) => (
          <div
            className="rounded-md border border-gray-300 bg-gray-100 p-4 shadow-sm"
            key={addr._id}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-lg">{addr.type}</span>
              <Button
                className="cursor-pointer appearance-none bg-transparent text-gray-900 shadow-none hover:bg-transparent hover:text-gray-500 active:text-gray-400"
                onClick={handleAddressEdit}
                size="icon"
              >
                <Pencil className="size-4" />
              </Button>
            </div>
            <p className="text-gray-600">
              {addr.street}, {addr.houseNumber}
            </p>
            <p className="text-gray-600">
              {addr.neighborhood}, {addr.city} - {addr.state}
            </p>
            <p className="text-gray-600">{addr.zipCode}</p>
            <p className="text-right text-gray-600">{addr.country}</p>
          </div>
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
