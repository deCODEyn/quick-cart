import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { useAuthContext, useShopContext } from '@/context';
import { useToast } from '@/hooks';
import type { AddCartItemType } from '@/types';

export function AddToCartButton({ id, size, name }: AddCartItemType) {
  const { addToCart } = useShopContext();
  const { userRole } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { showSuccessToast } = useToast();

  const isLoggedIn = !!userRole;

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
      className="h-11 cursor-pointer rounded bg-black px-8 py-3 text-sm text-white uppercase active:bg-gray-700 disabled:cursor-default disabled:bg-gray-600"
      disabled={!size}
      onClick={handleAddToCart}
      type="button"
    >
      {isLoggedIn ? 'add to cart' : 'login first'}
    </Button>
  );
}
