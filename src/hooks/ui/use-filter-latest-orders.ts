import { useCallback, useEffect, useState } from 'react';
import { useOrdersData } from '@/hooks';
import type { OrderType, OrderUnitProduct } from '@/types';

function extractLatestUncancelledItems(
  orders: OrderType[],
  maxItems: number
): OrderUnitProduct[] {
  const products: OrderUnitProduct[] = [];
  for (const order of orders.reverse()) {
    if (order.status !== 'Cancelled') {
      for (const item of order.items) {
        products.push(item.product);
        if (products.length >= maxItems) {
          return products;
        }
      }
    }
  }
  return products;
}

export function useFilterLatestOrders(): OrderUnitProduct[] | null {
  const { listOrders } = useOrdersData();
  const [ordersItems, setOrdersItems] = useState<OrderUnitProduct[] | null>(
    null
  );

  const getOrders = useCallback(async () => {
    const { result, success } = await listOrders();
    if (success && result) {
      const latestItems = extractLatestUncancelledItems(result, 5);
      setOrdersItems(latestItems);
    }
  }, [listOrders]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return ordersItems;
}
