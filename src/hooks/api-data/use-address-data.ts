import { useCallback } from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type {
  AddressFormData,
  AddressType,
  ListAddressesResponse,
  SingleAddressResponse,
  UseAddressDataReturn,
} from '@/types';

export function useAddressData(): UseAddressDataReturn {
  const { execute, isLoading } = useApiRequest();
  const privateApi = usePrivateRequest();

  const createAddress = useCallback(
    async (formData: FormData): Promise<SingleAddressResponse> => {
      return await execute<AddressType>(() =>
        privateApi.post<SingleAddressResponse>('/address', formData)
      );
    },
    [execute, privateApi]
  );

  const listAddresses =
    useCallback(async (): Promise<ListAddressesResponse> => {
      return await execute<AddressType[]>(() =>
        privateApi.get<ListAddressesResponse>('/address')
      );
    }, [execute, privateApi]);

  const getAddress = useCallback(
    async (addressId: string): Promise<SingleAddressResponse> => {
      return await execute<AddressType>(() =>
        privateApi.get<SingleAddressResponse>(`/address/${addressId}`)
      );
    },
    [execute, privateApi]
  );

  const updateAddress = useCallback(
    async (
      addressId: string,
      data: Partial<AddressFormData>
    ): Promise<SingleAddressResponse> => {
      return await execute<AddressType>(() =>
        privateApi.patch<SingleAddressResponse>(`/address/${addressId}`, data)
      );
    },
    [execute, privateApi]
  );

  const deleteAddress = useCallback(
    async (addressId: string): Promise<SingleAddressResponse> => {
      return await execute<AddressType>(() =>
        privateApi.delete<SingleAddressResponse>(`/address/${addressId}`)
      );
    },
    [execute, privateApi]
  );

  return {
    createAddress,
    listAddresses,
    getAddress,
    updateAddress,
    deleteAddress,
    isLoading,
  };
}
