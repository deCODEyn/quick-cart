import { useCallback } from 'react';
import type { AddressType, ListAddressesResponse } from '@/types';
import { useApiRequest } from './use-api-request';
import { usePrivateRequest } from './use-private-request';

export function useAddressData() {
  const { execute } = useApiRequest();
  const privateApi = usePrivateRequest();

  const getUserAddresses = useCallback(async (): Promise<AddressType[]> => {
    const { success, result } = await execute<AddressType[]>(() =>
      privateApi.get<ListAddressesResponse>('/address')
    );
    if (success && result) {
      return result;
    }
    return [];
  }, [execute, privateApi]);

  return getUserAddresses
}
