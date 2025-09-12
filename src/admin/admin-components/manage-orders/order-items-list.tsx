import type { OrderItemsListType } from '@/admin/admin-types';

export function OrderItemsList({ order, lastItem }: OrderItemsListType) {
  if (lastItem) {
    return (
      <p className="py-0.5 ">
        {order.product.name} x {order.quantity}
        <span> {order.size}</span>
      </p>
    );
  }
  return (
    <p className="py-0.5 ">
      {order.product.name} x {order.quantity}
      <span className="ml-0.5">{order.size}</span>,
    </p>
  );
}
