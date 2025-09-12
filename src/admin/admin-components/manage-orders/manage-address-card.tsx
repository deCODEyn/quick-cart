import type { ManageAddressCardType } from '@/admin/admin-types';

export function ManageAddressCard({ address }: ManageAddressCardType) {
  return (
    <div>
      <p>
        {address.street}, {address.houseNumber}
      </p>
      <p>
        {address.city} - {address.state}.
        <span className="ml-2">
          {address.country} ({address.zipCode})
        </span>
      </p>
    </div>
  );
}
