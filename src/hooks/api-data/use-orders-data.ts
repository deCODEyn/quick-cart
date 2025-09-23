import { useCallback } from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type {
  CreateOrderType,
  ListOrdersResponse,
  OrderType,
  SingleOrderCreateResponse,
  SingleOrderResponse,
} from '@/types';

export function useOrdersData() {
  const { execute, isLoading } = useApiRequest();
  const privateApi = usePrivateRequest();

  const createOrder = useCallback(
    async (
      orderPayload: CreateOrderType
    ): Promise<SingleOrderCreateResponse> => {
      return await execute<string>(() =>
        privateApi.post<SingleOrderCreateResponse>('/orders', orderPayload)
      );
    },
    [execute, privateApi]
  );

  const listOrders = useCallback(async (): Promise<ListOrdersResponse> => {
    return await execute<OrderType[]>(() =>
      privateApi.get<ListOrdersResponse>('/orders')
    );
  }, [execute, privateApi]);

  const getAllOrders = useCallback(async (): Promise<ListOrdersResponse> => {
    return await execute<OrderType[]>(() =>
      privateApi.get<ListOrdersResponse>('/orders/admin')
    );
  }, [execute, privateApi]);

  const updateOrderStatus = useCallback(
    async (orderId: string, status: string): Promise<SingleOrderResponse> => {
      return await execute<OrderType>(() =>
        privateApi.patch<SingleOrderResponse>(
          `/orders/admin/${orderId}/status`,
          { status }
        )
      );
    },
    [execute, privateApi]
  );

  const verifyStripePayment = useCallback(
    async (orderId: string, status: boolean) => {
      return await execute(() =>
        privateApi.patch(`/orders/${orderId}/verify-stripe`, { status })
      );
    },
    [execute, privateApi]
  );

  return {
    createOrder,
    listOrders,
    getAllOrders,
    updateOrderStatus,
    verifyStripePayment,
    isLoading,
  };
}
