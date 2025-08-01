import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { UseSearchBarReturn } from '@/types';

export function useSearchBar(): UseSearchBarReturn {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('collection')) {
      setShowSearch(false);
      setSearch('');
    }
  }, [location.pathname]);

  const handleCloseSearchBar = useCallback(() => {
    setShowSearch(false);
    setSearch('');
  }, []);

  return {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handleCloseSearchBar,
  };
}
