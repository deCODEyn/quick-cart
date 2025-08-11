import { Pencil, X } from 'lucide-react';
import type { ProductListItemType } from '@/admin/admin-types';
import { Button, Image } from '@/components';
import { currency } from '@/constants';

export function ProductListItem({ item, onDelete }: ProductListItemType) {
  return (
    <div
      className="grid grid-cols-[1fr_3fr_1fr] items-center justify-center gap-2 rounded-sm border px-2 py-1 text-sm md:grid-cols-[1fr_3fr_1fr_1fr_1fr]"
      key={item._id}
    >
      <Image
        alt={`Image to product ${item.name}`}
        className="w-12"
        src={item.image[0]}
      />
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>
        {currency}
        {item.price}
      </p>
      <div className="flex max-w-20 flex-row justify-center gap-0.5">
        <Button className="cursor-pointer border-2 border-gray-300 bg-gray-100 px-2 py-1 text-center text-current text-lg hover:bg-gray-300">
          <Pencil />
        </Button>
        <Button
          className="cursor-pointer border-2 border-gray-300 bg-gray-100 px-2 py-1 text-center text-current text-lg hover:bg-gray-300"
          onClick={() => onDelete(item._id)}
        >
          <X />
        </Button>
      </div>
    </div>
  );
}
