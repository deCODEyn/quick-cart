import { useMemo } from 'react';
import { CartSummaryRow, Title } from '@/components';
import { deliveryFee } from '@/constants';
import { useShopContext } from '@/context';

export function CartTotal() {
  const { getCartTotalAmount } = useShopContext();
  const subtotal = useMemo(() => getCartTotalAmount(), [getCartTotalAmount]);
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title span="totals" title="cart" />
      </div>
      <div className="mt-2 flex flex-col gap-2 text-sm">
        <CartSummaryRow price={subtotal} title="Subtotal" />
        <CartSummaryRow price={deliveryFee} title="Shipping Fee" />
        <CartSummaryRow isTotal={true} price={total} title="Total" />
      </div>
    </div>
  );
}
