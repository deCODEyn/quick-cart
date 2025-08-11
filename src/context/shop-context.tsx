import { createContext, useCallback, useEffect, useState } from 'react';
import { useApiRequest, useSearchBar, useShopCart } from '@/hooks';
import { api } from '@/services/api';
import type {
  CartItemsType,
  ListProductsResponse,
  ProductType,
  ShopContextInterface,
  ShopContextProviderType,
} from '@/types';

const initialCartItems: CartItemsType = {};

export const ShopContext = createContext<ShopContextInterface>({
  products: [],
  search: '',
  setSearch: () => {
    /* default empty function */
  },
  setShowSearch: () => {
    /* default empty function */
  },
  showSearch: true,
  cartItems: initialCartItems,
  addToCart: () => {
    /* default empty function */
  },
  getCartItemCount: () => 0,
  handleCloseSearchBar: () => {
    /* default empty function */
  },
  updateQuantity: () => {
    /* default empty function */
  },
  deleteFromCart() {
    /* default empty function */
  },
  getCartAmount: () => 0,
});

const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const {
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCartItemCount,
    getCartAmount,
  } = useShopCart();
  const { search, setSearch, showSearch, setShowSearch, handleCloseSearchBar } =
    useSearchBar();
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
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handleCloseSearchBar,
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCartItemCount,
    getCartAmount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
