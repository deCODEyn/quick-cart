import { SearchIcon, X } from 'lucide-react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '@/context/shop-context';

export function SearchBar() {
  const { search, setSearch, showSearch, handlerCloseSearchBar } =
    useContext(ShopContext);
  const location = useLocation();

  if (!(showSearch && location.pathname.includes('collection'))) {
    return null;
  }

  return (
    <div className="border-gray-300 border-t border-b bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 md:w-1/2">
        <input
          className="flex-1 bg-inherit text-sm outline-none"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          type="text"
          value={search}
        />
        <SearchIcon className="w-4" />
      </div>
      <X
        className="inline w-5 cursor-pointer"
        onClick={handlerCloseSearchBar}
      />
    </div>
  );
}
