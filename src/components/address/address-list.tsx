import { AddressCard, Button } from '@/components';
import type { AddressListInterface } from '@/types';

export function AddressList({
  addresses,
  selectedId,
  onSelect,
}: AddressListInterface) {
  return (
    <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
      {addresses?.map((address) => (
        <div
          className={`flex cursor-pointer rounded-md ${
            selectedId === address._id
              ? 'border-2 border-green-400 shadow-lg'
              : 'border border-gray-200'
          }`}
          key={address._id}
        >
          <Button
            className="block h-full w-full cursor-pointer appearance-none bg-transparent p-0 text-start text-gray-900 text-lg hover:bg-transparent"
            onClick={() => onSelect(address._id)}
          >
            <AddressCard address={address} allowToEdit={false} />
          </Button>
        </div>
      ))}
    </div>
  );
}
