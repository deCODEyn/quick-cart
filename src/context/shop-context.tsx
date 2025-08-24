import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuthContext } from '@/context';
import { useCartData, useProductData } from '@/hooks';
import type {
  ContextProviderType,
  ProductType,
  ShopContextInterface,
} from '@/types';

export const ShopContext = createContext<ShopContextInterface | undefined>(
  undefined
);

export const ShopContextProvider = ({ children }: ContextProviderType) => {
  const { userRole } = useAuthContext();
  const {
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCart,
    getCartItemCount,
    getCartAmount,
    resetCart,
    clearCart,
  } = useCartData();
  const [products, setProducts] = useState<ProductType[]>([]);
  const { listProducts } = useProductData();

  const getProducts = useCallback(async () => {
    const { success, result } = await listProducts();
    if (success && result) {
      setProducts(result);
    }
  }, [listProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (userRole) {
      getCart();
    } else {
      resetCart();
    }
  }, [userRole, getCart, resetCart]);

  const getCartTotalAmount = useCallback(() => {
    return getCartAmount(products);
  }, [getCartAmount, products]);

  const value = {
    addToCart,
    deleteFromCart,
    getCartTotalAmount,
    getCartItemCount,
    getProducts,
    updateQuantity,
    cartItems,
    products,
    clearCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error(
      'useShopContext must be used within an ShopContextProvider'
    );
  }
  return context;
};
