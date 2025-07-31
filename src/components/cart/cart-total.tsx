import { useContext, useMemo } from 'react';
import { CartSummaryRow, Title } from '@/components';
import { ShopContext } from '@/context/shop-context';

export function CartTotal() {
  const { getCartAmount, deliveryFee } = useContext(ShopContext);
  const subtotal = useMemo(() => getCartAmount(), [getCartAmount]);
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title span="TOTALS" title="CART" />
      </div>
      <div className="mt-2 flex flex-col gap-2 text-sm">
        <CartSummaryRow price={subtotal} title="Subtotal" />
        <CartSummaryRow price={deliveryFee} title="Shipping Fee" />
        <CartSummaryRow isTotal={true} price={total} title="Total" />
      </div>
    </div>
  );
}
