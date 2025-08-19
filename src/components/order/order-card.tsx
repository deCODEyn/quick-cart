import { OrderItem, OrderStatusIndicator } from '@/components';
import { useDateFormat } from '@/hooks';
import type { OrderCardType } from '@/types';
import { OrderTotal } from './order-total';

export function OrderCard({ order }: OrderCardType) {
  const formattedDate = useDateFormat(order.createdAt);

  return (
    <div className="my-5 rounded-lg border border-gray-400 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-bold text-gray-800">
          Pedido #{order._id.substring(0, 8)}
        </p>
        <div className="flex items-center gap-5">
          <p className="mx-0 text-gray-500 text-xs md:mx-5 md:text-base">
            Date:
            <span className="ml-1 font-medium text-gray-700">
              {formattedDate}
            </span>
          </p>
          <OrderStatusIndicator status={order.status} />
        </div>
      </div>
      <hr className="mx-10 my-4 border-gray-300" />
      <div className="flex flex-col gap-5">
        {order.items.map((item) => (
          <OrderItem
            key={item._id}
            product={item.product}
            quantity={item.quantity}
            size={item.size}
          />
        ))}
      </div>
      <hr className="mx-10 my-4 border-gray-300" />
      <div className="flex justify-end">
        <OrderTotal amount={order.amount} deliveryFee={order.deliveryFee} />
      </div>
    </div>
  );
}
