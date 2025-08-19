import { useCallback, useEffect, useState } from 'react';
import { OrderCard, Title } from '@/components';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type { ListOrdersResponse, OrderType } from '@/types';

export function Orders() {
  const { execute } = useApiRequest();
  const privateApi = usePrivateRequest();
  const [orders, setOrders] = useState<OrderType[] | null>(null);

  const getOrders = useCallback(async () => {
    const { success, result } = await execute<OrderType[]>(() =>
      privateApi.get<ListOrdersResponse>('/orders')
    );
    if (success && result) {
      setOrders(result.reverse());
    }
  }, [execute, privateApi]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (!orders) {
    return (
      <div className="border-gray-500 border-t pt-16">Loading orders...</div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="border-gray-500 border-t pt-16">No orders found.</div>
    );
  }

  return (
    <div className="border-gray-500 border-t pt-16">
      <div className="text-2xl">
        <Title span="orders" title="my" />
      </div>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}
