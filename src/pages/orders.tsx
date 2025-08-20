import { useCallback, useEffect, useState } from 'react';
import { LoadingData, OrderCard, Title } from '@/components';
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
    <div className="border-t pt-14">
      <h2 className="text-2xl">
        <Title span="orders" title="my" />
      </h2>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}
