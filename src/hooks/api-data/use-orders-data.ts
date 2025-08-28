import { useCallback } from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type { ListOrdersResponse, OrderType } from '@/types';

export function useOrdersData() {
  const { execute, isLoading } = useApiRequest();
  const privateApi = usePrivateRequest();

  const listOrders = useCallback(async (): Promise<ListOrdersResponse> => {
    return await execute<OrderType[]>(() =>
      privateApi<ListOrdersResponse>('/orders')
    );
  }, [execute, privateApi]);

  return { listOrders, isLoading };
}
