import { useContext } from 'react';
import { ShopContext } from '@/context/shop-context';
import { useToast } from '@/hooks';
import type { AddCartItemType } from '@/types';

export function AddToCartButton({ id, size, name }: AddCartItemType) {
  const { addToCart } = useContext(ShopContext);
  const { showSuccessToast } = useToast();

  const handleAddToCart = () => {
    addToCart({ id, size });
    showSuccessToast(`${name} size ${size} added to cart.`);
  };

  return (
    <button
      className="cursor-pointer bg-black px-8 py-3 text-sm text-white active:bg-gray-700 disabled:cursor-default disabled:bg-gray-500"
      disabled={!size}
      onClick={handleAddToCart}
      type="button"
    >
      ADD TO CART
    </button>
  );
}
