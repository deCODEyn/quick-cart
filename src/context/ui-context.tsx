import { createContext } from 'react';
import { useSearchBar } from '@/hooks';
import type { ContextProviderType, UIContextInterface } from '@/types';

export const UIContext = createContext<UIContextInterface>({
  handleCloseSearchBar: () => {
    /* default empty function */
  },
  setSearch: () => {
    /* default empty function */
  },
  setShowSearch: () => {
    /* default empty function */
  },
  search: '',
  showSearch: true,
});

export const UIContextProvider = ({ children }: ContextProviderType) => {
  const { search, setSearch, showSearch, setShowSearch, handleCloseSearchBar } =
    useSearchBar();

  const value = {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handleCloseSearchBar,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
