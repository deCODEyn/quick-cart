/** biome-ignore-all lint/correctness/useExhaustiveDependencies: products is a logical dependency for getCartAmount */
import { useCallback, useState } from 'react';
import type {
  CartItemsType,
  CartUpdateItemType,
  CartUpdateQuantityType,
  UseShopCartReturn,
} from '@/types';
import { products } from '@/utils/assets';

export function useShopCart(): UseShopCartReturn {
  const [cartItems, setCartItems] = useState<CartItemsType>({});

  const addToCart = useCallback(({ id, size }: CartUpdateItemType) => {
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

  const deleteFromCart = useCallback(({ id, size }: CartUpdateItemType) => {
    setCartItems((prevCartItems) => {
      const newCartItems = structuredClone(prevCartItems);
      if (newCartItems[id]) {
        delete newCartItems[id][size];
        if (Object.keys(newCartItems[id]).length === 0) {
          delete newCartItems[id];
        }
      }
      return newCartItems;
    });
  }, []);

  const updateQuantity = useCallback(
    ({ id, size, quantity }: CartUpdateQuantityType) => {
      setCartItems((prevCartItems) => {
        const newCartItems = structuredClone(prevCartItems);
        if (newCartItems[id] && newCartItems[id][size] !== undefined) {
          if (quantity > 0) {
            newCartItems[id][size] = quantity;
          } else {
            delete newCartItems[id][size];
            if (Object.keys(newCartItems[id]).length === 0) {
              delete newCartItems[id];
            }
          }
        }
        return newCartItems;
      });
    },
    []
  );

  const getCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((totalAmount, [id, sizes]) => {
      const productData = products.find((product) => product._id === id);
      if (!productData) {
        return totalAmount;
      }
      const productTotal = Object.entries(sizes).reduce((sum, [, quantity]) => {
        if (quantity > 0) {
          return sum + productData.price * quantity;
        }
        return sum;
      }, 0);
      return totalAmount + productTotal;
    }, 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return Object.values(cartItems).reduce((totalItemsCount, itemSize) => {
      const quantities = Object.values(itemSize);
      const productCount = quantities.reduce(
        (sum, quantity) => sum + quantity,
        0
      );
      return totalItemsCount + productCount;
    }, 0);
  }, [cartItems, products]);

  return {
    cartItems,
    addToCart,
    deleteFromCart,
    getCartAmount,
    getCartItemCount,
    updateQuantity,
  };
}
