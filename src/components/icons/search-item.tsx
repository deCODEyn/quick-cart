import { SearchIcon } from 'lucide-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UIContext } from '@/context/ui-context';

export function SearchItem() {
  const { setShowSearch } = useContext(UIContext);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate('/collection');
  };

  return (
    <SearchIcon className="w-5 cursor-pointer" onClick={handleSearchClick} />
  );
}
