import type { CartDisplayItem, CartItemsType } from '@/types';

export function transformCartItems(
  cartItems: CartItemsType
): CartDisplayItem[] {
  return Object.entries(cartItems).flatMap(([productId, sizes]) =>
    Object.entries(sizes).map(([size, quantity]) => ({
      id: productId,
      size,
      quantity,
    }))
  );
}
