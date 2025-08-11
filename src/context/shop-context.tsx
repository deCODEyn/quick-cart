import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useApiRequest, useShopCart } from '@/hooks';
import { api } from '@/services/api';
import type {
  ContextProviderType,
  ListProductsResponse,
  ProductType,
  ShopContextInterface,
} from '@/types';

export const ShopContext = createContext<ShopContextInterface | undefined>(
  undefined
);

export const ShopContextProvider = ({ children }: ContextProviderType) => {
  const {
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCartItemCount,
    getCartAmount,
  } = useShopCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const { execute } = useApiRequest();

  const getProducts = useCallback(async () => {
    await execute<ProductType[]>(
      () => api.get<ListProductsResponse>('/products'),
      (data) => {
        setProducts(data);
      }
    );
  }, [execute]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const value = {
    addToCart,
    deleteFromCart,
    getCartAmount,
    getCartItemCount,
    getProducts,
    updateQuantity,
    cartItems,
    products,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
