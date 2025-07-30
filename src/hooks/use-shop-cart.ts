import { useCallback, useState } from 'react';
import type {
  AddCartItemType,
  CartItemsType,
  UseShopCartReturn,
} from '@/types';

export function useShopCart(): UseShopCartReturn {
  const [cartItems, setCartItems] = useState<CartItemsType>({});

  const addToCart = useCallback(({ id, size }: AddCartItemType) => {
    setCartItems((prevCartItems) => {
      const cartData = structuredClone(prevCartItems);
      if (!cartData[id]) {
        cartData[id] = {};
      }
      const updatedItem = cartData[id];

      if (updatedItem[size]) {
        updatedItem[size] += 1;
      } else {
        updatedItem[size] = 1;
      }
      return cartData;
    });
  }, []);

  const getCartCount = useCallback(() => {
    return Object.values(cartItems).reduce<number>(
      (totalItemsCount, itemSize) => {
        const quantities = Object.values(itemSize);
        const productCount = quantities.reduce(
          (sum, quantity) => sum + quantity,
          0
        );
        return totalItemsCount + productCount;
      },
      0
    );
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    getCartCount,
  };
}
