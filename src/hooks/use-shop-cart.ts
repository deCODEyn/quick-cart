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

  const getCart = useCallback(() => {
    execute<CartDisplayItem[]>(
      () => privateRequest.get<ListCartItemsResponse>('/cart'),
      (items) => setCartItems(normalizeCartData(items)),
      () => {
        /* onFinish */
      },
      true
    );
  }, [execute, privateRequest]);

  const resetCart = useCallback(() => {
    setCartItems({});
  }, []);

  const updateCart = useCallback(
    ({ id, size, quantity }: CartUpdateQuantityType) => {
      execute<CartDisplayItem[]>(
        async () =>
          await privateRequest.post<ListCartItemsResponse>('/cart', {
            id,
            size,
            quantity,
          }),
        (items) => setCartItems(normalizeCartData(items))
      );
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

  const deleteFromCart = useCallback(
    ({ id, size }: CartUpdateItemType) => {
      execute<CartDisplayItem[]>(
        async () =>
          await privateRequest.delete<ListCartItemsResponse>(
            `/cart/${id}/${size}`
          ),
        (items) => setCartItems(normalizeCartData(items))
      );
    },
    [execute, privateRequest]
  );

  const updateQuantity = useCallback(
    ({ id, size, quantity }: CartUpdateQuantityType) => {
      updateCart({ id, size, quantity });
    },
    [updateCart]
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
