import { useMemo } from 'react';
import { SummaryRow, Title } from '@/components';
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
      <div className="mt-2 flex flex-col text-sm">
        <SummaryRow price={subtotal} title="Subtotal" />
        <SummaryRow price={deliveryFee} title="Shipping Fee" />
        <SummaryRow isTotal={true} price={total} title="Total" />
      </div>
    </div>
  );
}
