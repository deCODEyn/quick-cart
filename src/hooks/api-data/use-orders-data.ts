import { useCallback } from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type {
  CreateOrderType,
  ListOrdersResponse,
  OrderType,
  SingleOrderResponse,
} from '@/types';

export function useOrdersData() {
  const { execute, isLoading } = useApiRequest();
  const privateApi = usePrivateRequest();

  const createOrder = useCallback(
    async (orderPayload: CreateOrderType): Promise<SingleOrderResponse> => {
      return await execute<OrderType>(() =>
        privateApi.post<SingleOrderResponse>('/orders', orderPayload)
      );
    },
    [execute, privateApi]
  );

  const listOrders = useCallback(async (): Promise<ListOrdersResponse> => {
    return await execute<OrderType[]>(() =>
      privateApi.get<ListOrdersResponse>('/orders')
    );
  }, [execute, privateApi]);

  return { createOrder, listOrders, isLoading };
}
