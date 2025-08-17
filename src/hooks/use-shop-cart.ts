import { useCallback, useState } from 'react';
import type {
  CartDisplayItem,
  CartItemsType,
  CartUpdateItemType,
  CartUpdateQuantityType,
  ListCartItemsResponse,
  ProductType,
  UseShopCartReturn,
} from '@/types';
import { useApiRequest } from './use-api-request';
import { usePrivateRequest } from './use-private-request';

const normalizeCartData = (items: CartDisplayItem[]): CartItemsType => {
  return items.reduce((organizedCart, item) => {
    if (!organizedCart[item.id]) {
      organizedCart[item.id] = {};
    }
    organizedCart[item.id][item.size] = item.quantity;
    return organizedCart;
  }, {} as CartItemsType);
};

export function useShopCart(): UseShopCartReturn {
  const { execute } = useApiRequest();
  const [cartItems, setCartItems] = useState<CartItemsType>({});
  const privateRequest = usePrivateRequest();

  const getCart = useCallback(async () => {
    const { success, result } = await execute<CartDisplayItem[]>(
      () => privateRequest.get<ListCartItemsResponse>('/cart'),
      true
    );
    if (success && result) {
      setCartItems(normalizeCartData(result));
    }
  }, [execute, privateRequest]);

  const resetCart = useCallback(() => {
    setCartItems({});
  }, []);

  const updateCart = useCallback(
    async ({ id, size, quantity }: CartUpdateQuantityType) => {
      const { success, result } = await execute<CartDisplayItem[]>(() =>
        privateRequest.post<ListCartItemsResponse>('/cart', {
          id,
          size,
          quantity,
        })
      );
      if (success && result) {
        setCartItems(normalizeCartData(result));
      }
    },
    [execute, privateRequest]
  );

  const addToCart = useCallback(
    ({ id, size }: CartUpdateItemType) => {
      const newQuantity = (cartItems?.[id]?.[size] || 0) + 1;
      updateCart({ id, size, quantity: newQuantity });
    },
    [cartItems, updateCart]
  );

  const updateQuantity = useCallback(
    ({ id, size, quantity }: CartUpdateQuantityType) => {
      updateCart({ id, size, quantity });
    },
    [updateCart]
  );

  const deleteFromCart = useCallback(
    async ({ id, size }: CartUpdateItemType) => {
      const { success, result } = await execute<CartDisplayItem[]>(() =>
        privateRequest.delete<ListCartItemsResponse>(`/cart/${id}/${size}`)
      );
      if (success && result) {
        setCartItems(normalizeCartData(result));
      }
    },
    [execute, privateRequest]
  );

  const getCartAmount = useCallback(
    (products: ProductType[]) => {
      return Object.entries(cartItems).reduce((totalAmount, [id, sizes]) => {
        const productData = products.find((product) => product._id === id);
        if (!productData) {
          return totalAmount;
        }
        const productTotal = Object.entries(sizes).reduce(
          (sum, [, quantity]) => {
            if (quantity > 0) {
              return sum + productData.price * quantity;
            }
            return sum;
          },
          0
        );
        return totalAmount + productTotal;
      }, 0);
    },
    [cartItems]
  );

  const getCartItemCount = useCallback(() => {
    return Object.values(cartItems).reduce((totalItemsCount, itemSize) => {
      const quantities = Object.values(itemSize);
      const productCount = quantities.reduce(
        (sum, quantity) => sum + quantity,
        0
      );
      return totalItemsCount + productCount;
    }, 0);
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    deleteFromCart,
    getCart,
    getCartAmount,
    getCartItemCount,
    updateQuantity,
    resetCart,
  };
}
