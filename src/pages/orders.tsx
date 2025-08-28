import { useCallback, useEffect, useState } from 'react';
import { LinkButton, LoadingData, OrderCard, Title } from '@/components';
import { useOrdersData } from '@/hooks';
import type { OrderType } from '@/types';

export function Orders() {
  const { listOrders } = useOrdersData();
  const [orders, setOrders] = useState<OrderType[] | null>(null);

  const getOrders = useCallback(async () => {
    const { result, success } = await listOrders();
    if (success && result) {
      setOrders(result.reverse());
    }
  }, [listOrders]);

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
        <LinkButton href="/collection" label="go shopping!" />
      </div>
    );
  }

  return (
    <div className="border-t pt-14">
      <h1 className="text-2xl">
        <Title as="h1" span="orders" title="my" />
      </h1>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}
