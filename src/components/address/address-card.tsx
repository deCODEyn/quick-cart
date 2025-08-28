import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import type { AddressCardType } from '@/types';

export function AddressCard({ address, allowToEdit = true }: AddressCardType) {
  const navigate = useNavigate();

  const handleAddressEdit = () => {
    navigate('/address/edit', { state: { address } });
  };

  return (
    <div className="rounded-md border border-gray-300 bg-gray-100 p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-lg">{address.type}</span>
        {allowToEdit && (
          <Button
            className="cursor-pointer appearance-none bg-transparent text-gray-900 shadow-none hover:bg-transparent hover:text-gray-500 active:text-gray-400"
            onClick={handleAddressEdit}
            size="icon"
          >
            <Pencil className="size-4" />
          </Button>
        )}
      </div>
      <p className="text-gray-600">
        {address.street}, {address.houseNumber}
      </p>
      <p className="text-gray-600">
        {address.neighborhood !== ''
          ? address.neighborhood
          : 'No registered neighborhood'}
      </p>
      <p className="text-gray-600">
        {address.city} - {address.state}
      </p>
      <p className="text-gray-600">{address.zipCode}</p>
      <p className="text-end text-gray-600">{address.country}</p>
    </div>
  );
}
