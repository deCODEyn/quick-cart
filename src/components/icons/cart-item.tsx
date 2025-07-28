import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CartItem() {
  const itemsInCart = 10;
  return (
    <Link className="relative" to="/cart">
      <ShoppingCart className="w-6 min-w-6 cursor-pointer" />
      <p className="absolute right-[-5px] bottom-[12px] aspect-square w-4 rounded-full bg-green-800 text-center text-[8px] text-white leading-4">
        {itemsInCart}
      </p>
    </Link>
  );
}
