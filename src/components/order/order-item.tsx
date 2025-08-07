import { DisplayPrice, Image } from '@/components';
import { useDateFormat } from '@/hooks';
import type { OrderItemType } from '@/types';

export function OrderItem({ product, quantity, size }: OrderItemType) {
  return (
    <div className="flex items-start gap-6 text-sm">
      <Image
        alt={`imagem de ${product.name}`}
        className="w-16 sm:w-20"
        src={product.image[0]}
      />
      <div>
        <p className="font-medium sm:text-base">{product.name}</p>
        <div className="mt-2 flex items-center gap-3 text-base text-gray-700">
          <DisplayPrice price={product.price} />
          <p>Quantity: {quantity}</p>
          <p>Size: {size}</p>
        </div>
        <p className="mt-4">
          Date:
          <span className="ml-2 text-gray-400">
            {useDateFormat(product.date)}
          </span>
        </p>
      </div>
    </div>
  );
}
