import {
  Button,
  OrderItem,
  OrderStatusIndicator,
  OrderTotal,
  Title,
} from '@/components';
import { useDateFormat } from '@/hooks';
import type { OrderCardType } from '@/types';

export function OrderCard({ order }: OrderCardType) {
  const formattedDate = useDateFormat(order.createdAt);
  const canEdit =
    order.status === 'Order Placed' || order.status === 'Ready to ship';

  const handleEditClick = () => {
    // Lógica para navegação para a página de edição ou para abrir um modal
    // Por exemplo: history.push(`/edit-order/${order._id}`);
  };

  return (
    <div className="my-5 rounded-lg border border-gray-400 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-bold text-gray-800">
          <Title
            as="h4"
            span={`#${order._id.substring(0, 10)}`}
            title="pedido:"
          />
        </h4>
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
        {canEdit && (
          <Button
            className="m-4 justify-self-center rounded-lg border border-gray-400 bg-gray-200 px-4 py-2 text-gray-600 text-sm hover:bg-gray-100"
            onClick={handleEditClick}
          >
            Edit Address
          </Button>
        )}
      </div>
    </div>
  );
}
