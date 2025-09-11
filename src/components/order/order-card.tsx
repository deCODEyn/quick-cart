import {
  OrderItem,
  OrderStatusIndicator,
  OrderTotal,
  Title,
} from '@/components';
import { useDateFormat } from '@/hooks';
import type { OrderCardInterface } from '@/types';

export function OrderCard({ order, onRefresh }: OrderCardInterface) {
  const formattedDate = useDateFormat(order.createdAt);

  return (
    <div className="my-5 rounded-lg border border-gray-400 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-bold text-xs md:text-base">
          <Title
            as="h4"
            span={`#${order._id.substring(0, 10)}`}
            title="pedido:"
          />
        </h4>
        <div className="flex items-center gap-5">
          <div className="mx-1 text-xs md:mx-5 md:text-base">
            <p className="text-gray-500">
              Date:
              <span className="ml-1 font-medium text-gray-700">
                {formattedDate}
              </span>
            </p>
            <p className="text-gray-500">
              Payment:
              <span className="ml-1 font-medium text-gray-700">
                {order.paymentMethod.toUpperCase()}
              </span>
            </p>
          </div>
          <OrderStatusIndicator onRefresh={onRefresh} status={order.status} />
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
