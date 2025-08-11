import React from 'react';
import { DisplayPrice, Image, Input, TrashItem } from '@/components';
import { useShopContext } from '@/context/shop-context';
import type { CartItemCardType } from '@/types';

export const CartItemCard = React.memo(
  ({ item, product }: CartItemCardType) => {
    const { updateQuantity } = useShopContext();

    const handleQuantityChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      event.target.value === ''
        ? null
        : updateQuantity({
            id: item.id,
            size: item.size,
            quantity: Number(event.target.value),
          });
    };

    return (
      <div className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-t py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]">
        <div className="flex items-start gap-6">
          <Image
            alt={`Image of ${product.name} in cart`}
            className="w-16 sm:w-20"
            src={product.image[0]}
          />
          <div>
            <p className="font-medium text-xs sm:text-lg">{product.name}</p>
            <div className="mt-2 flex items-center gap-5">
              <p>
                <DisplayPrice price={product.price} />
              </p>
              <p className="sm:py1 rounded-sm border bg-slate-50 px-2 sm:px-3">
                {item.size}
              </p>
            </div>
          </div>
        </div>
        <Input
          className="max-w-10 border px-1 py-1 sm:max-w-20 sm:px-2"
          min={1}
          onChange={handleQuantityChange}
          type="number"
          value={item.quantity}
        />
        <TrashItem id={item.id} size={item.size} />
      </div>
    );
  }
);
