import { ClipboardEdit } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { ManageAddressCard, OrderItemsList } from '@/admin/admin-components';
import { DisplayPrice, LoadingData, SelectInput } from '@/components';
import { allOrdersStatus } from '@/constants';
import { useOrdersData } from '@/hooks';
import type { OrderType } from '@/types';

export function ManageOrders() {
  const { getAllOrders, updateOrderStatus } = useOrdersData();
  const [orders, setOrders] = useState<OrderType[] | null>(null);

  const getOrders = useCallback(async () => {
    const { result, success } = await getAllOrders();
    if (success && result) {
      setOrders(result.reverse());
    }
  }, [getAllOrders]);

  const updateStatus = useCallback(
    async (status: string, orderId: string) => {
      const { success } = await updateOrderStatus(orderId, status);
      if (success) {
        getOrders();
      }
    },
    [updateOrderStatus, getOrders]
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (!orders) {
    return <LoadingData data="orders" />;
  }

  if (orders.length === 0) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center font-semibold text-2xl text-gray-500">
        No orders found.
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Manage Orders</h1>
      <div>
        {orders.map((order) => (
          <div
            className="my-3 grid grid-cols-1 items-start gap-3 border-2 border-gray-500 p-5 text-gray-700 text-xs md:my-4 md:grid-cols-[0.5fr_2fr_1fr] md:p-8 md:text-sm lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr]"
            key={order._id}
          >
            <ClipboardEdit className="size-15" />
            <div>
              <div>
                {order.items.map((item, index) => (
                  <OrderItemsList
                    key={`${order._id}-${item._id}-${index}`}
                    lastItem={index === order.items.length - 1}
                    order={item}
                  />
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium">Usuário: {order.userId}</p>
              <ManageAddressCard address={order.address} />
            </div>
            <div>
              <p className="text-sm md:text-base">
                Items: {order.items.length}
              </p>
              <p className="mt-3 ">Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p> Date: {new Date(order.createdAt).toDateString()}</p>
            </div>
            <DisplayPrice price={order.amount} />
            <SelectInput
              className="text-md"
              onChange={(value: string) => updateStatus(value, order._id)}
              options={allOrdersStatus}
              value={order.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
