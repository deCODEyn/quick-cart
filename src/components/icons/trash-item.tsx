import { Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { ShopContext } from '@/context/shop-context';
import type { CartUpdateItemType } from '@/types';

export function TrashItem({ id, size }: CartUpdateItemType) {
  const { deleteFromCart } = useContext(ShopContext);

  return (
    <Trash2
      className="mr-4 w-4 cursor-pointer sm:w-5"
      onClick={() => deleteFromCart({ id, size })}
    />
  );
}
