import { createContext } from 'react';
import type { ShopContextProviderProps, ShopContextType } from '@/types';
import { products } from '@/utils/assets';

export const ShopContext = createContext<ShopContextType>({
  products,
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
