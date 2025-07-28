import { createContext, useState } from 'react';
import type { ShopContextProviderType, ShopContextType } from '@/types';
import { products } from '@/utils/assets';

export const ShopContext = createContext<ShopContextType>({
  products,
  currency: '',
  delivery_fee: 0,
  search: '',
  setSearch: () => {
    /* default empty function */
  },
  setShowSearch: () => {
    /* default empty function */
  },
  showSearch: true,
});

const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
