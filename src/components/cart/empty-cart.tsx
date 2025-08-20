import { ShoppingCart } from 'lucide-react';
import { LinkButton } from '@/components';

export function EmptyCart() {
  return (
    <div className="border-t">
      <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-gray-600">
        <ShoppingCart size={48} />
        <p className="font-medium text-xl">Your cart is empty.</p>
        <LinkButton href="/collection" label="go shopping!" />
      </div>
    </div>
  );
}
