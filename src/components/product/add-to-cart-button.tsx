import type { AddCartItemType } from '@/types';

export function AddToCartButton({ id, size, name }: AddCartItemType) {
  return (
    <button
      className="cursor-pointer bg-black px-8 py-3 text-sm text-white active:bg-gray-700 disabled:cursor-default disabled:bg-gray-500"
      disabled={!size}
      type="button"
    >
      ADD TO CART
    </button>
  );
}
