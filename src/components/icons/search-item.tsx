import { SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUIContext } from '@/context';

export function SearchItem() {
  const { setShowSearch } = useUIContext();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate('/collection');
  };

  return (
    <SearchIcon className="w-5 cursor-pointer" onClick={handleSearchClick} />
  );
}
