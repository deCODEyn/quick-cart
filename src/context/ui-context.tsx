import { createContext, useContext } from 'react';
import { useSearchBar } from '@/hooks';
import type { ContextProviderType, UIContextInterface } from '@/types';

export const UIContext = createContext<UIContextInterface | undefined>(
  undefined
);

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

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
