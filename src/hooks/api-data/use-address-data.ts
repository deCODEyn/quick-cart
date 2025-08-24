import { useCallback } from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type { AddressType, ListAddressesResponse } from '@/types';

export function useAddressData() {
  const { execute } = useApiRequest();
  const privateApi = usePrivateRequest();

  const getUserAddresses =
    useCallback(async (): Promise<ListAddressesResponse> => {
      return await execute<AddressType[]>(() =>
        privateApi.get<ListAddressesResponse>('/address')
      );
    }, [execute, privateApi]);

  return { getUserAddresses };
}
