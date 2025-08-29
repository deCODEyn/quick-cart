import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { useAuthContext, useShopContext } from '@/context';
import { useToast } from '@/hooks';
import type { AddCartItemType } from '@/types';

export function AddToCartButton({ id, size, name }: AddCartItemType) {
  const { addToCart } = useShopContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { showSuccessToast } = useToast();
  const isLoggedIn = !!user;

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }
    addToCart({ id, size });
    showSuccessToast(`${name} size ${size} added to cart.`);
  };

  return (
    <Button
      className="h-10 cursor-pointer rounded bg-black px-10 py-4 text-sm text-white uppercase hover:bg-gray-700 active:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-500"
      disabled={!size}
      onClick={handleAddToCart}
      type="button"
    >
      {isLoggedIn ? 'add to cart' : 'login first'}
    </Button>
  );
}
