import { createContext } from 'react';
import { products } from '@/assets/assets';
import type { ShopContextProviderProps, ShopContextType } from '@/types';

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '',
  delivery_fee: 0,
});

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = '$';
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
