import { DisplayPrice, Image } from '@/components';
import type { OrderItemType } from '@/types';

export function OrderItem({ product, quantity, size }: OrderItemType) {
  return (
    <div className="flex items-start gap-6 text-sm">
      <Image
        alt={`imagem de ${product.name}`}
        className="w-16 sm:w-20"
        src={product.image}
      />
      <div className="w-3/4">
        <p className="font-medium sm:text-base">{product.name}</p>
        <div className="mt-2 flex items-center gap-12 text-gray-700 text-sm sm:text-base">
          <DisplayPrice price={product.price * quantity} />
          <p>Quantity: {quantity}</p>
          <p>Size: {size}</p>
        </div>
      </div>
    </div>
  );
}
