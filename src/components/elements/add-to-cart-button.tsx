import { Button } from '@/components';
import { useShopContext } from '@/context';
import { useToast } from '@/hooks';
import type { AddCartItemType } from '@/types';

export function AddToCartButton({ id, size, name }: AddCartItemType) {
  const { addToCart } = useShopContext();
  const { showSuccessToast } = useToast();

  const handleAddToCart = () => {
    addToCart({ id, size });
    showSuccessToast(`${name} size ${size} added to cart.`);
  };

  return (
    <Button
      className="h-11 cursor-pointer rounded bg-black px-8 py-3 text-sm text-white active:bg-gray-700 disabled:cursor-default disabled:bg-gray-600"
      disabled={!size}
      onClick={handleAddToCart}
      type="button"
    >
      ADD TO CART
    </Button>
  );
}
