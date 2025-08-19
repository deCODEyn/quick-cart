import { SummaryRow } from '@/components';
import type { OrderTotalType } from '@/types';

export function OrderTotal({ amount, deliveryFee }: OrderTotalType) {
  const total = amount + deliveryFee;

  return (
    <div className="w-full text-sm">
      <SummaryRow price={amount} title="Products amount" />
      <SummaryRow price={deliveryFee} title="Shipping Fee" />
      <SummaryRow isTotal={true} price={total} title="Total order amount" />
    </div>
  );
}
