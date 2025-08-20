import { Trash2 } from 'lucide-react';
import { useShopContext } from '@/context';
import type { CartUpdateItemType } from '@/types';

export function TrashItem({ id, size }: CartUpdateItemType) {
  const { deleteFromCart } = useShopContext();

  return (
    <Trash2
      className="cursor-pointer"
      onClick={() => deleteFromCart({ id, size })}
      size={28}
    />
  );
}
