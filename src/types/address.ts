import type { UseFormReturn } from 'react-hook-form';
import type { AddressFormData, AddressType } from '@/schemas';
import type { ListAddressesResponse, SingleAddressResponse } from '@/types';

export interface AddressFormInterface {
  form: UseFormReturn<AddressFormData>;
  onSubmit: (
    data: AddressFormData
  ) => Promise<{ success: boolean; message: string }>;
  isEditMode?: boolean;
  isLoading?: boolean;
}

export interface UseAddressDataReturn {
  createAddress: (formData: FormData) => Promise<SingleAddressResponse>;
  deleteAddress: (addressId: string) => Promise<SingleAddressResponse>;
  getAddress: (addressId: string) => Promise<SingleAddressResponse>;
  listAddresses: () => Promise<ListAddressesResponse>;
  updateAddress: (
    addressId: string,
    data: Partial<AddressFormData>
  ) => Promise<SingleAddressResponse>;
  isLoading: boolean;
}

export type AddressCardType = {
  address: AddressType;
  allowToEdit?: boolean;
};