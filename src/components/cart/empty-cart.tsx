import { ShoppingCart } from 'lucide-react';
import { LinkButton } from '@/components';

export function EmptyCart() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center text-gray-600">
      <ShoppingCart className="mb-4" size={48} />
      <p className="font-medium text-xl">Your cart is empty.</p>
      <LinkButton href="/collection" label="go shopping!" />
    </div>
  );
}
