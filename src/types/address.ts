import type { ListAddressesResponse, SingleAddressResponse } from '@/types';

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

export type AddressFormData = {
  city: string;
  country: string;
  houseNumber: string;
  state: string;
  street: string;
  type: AddressTypeEnum;
  zipCode: string;
  complement?: string | undefined;
  neighborhood?: string | undefined;
  reference?: string | undefined;
};

export type AddressFormType = {
  initialData?: AddressType;
  isEditMode: boolean;
};

export type AddressType = {
  _id: string;
  city: string;
  country: string;
  houseNumber: string;
  state: string;
  street: string;
  type: AddressTypeEnum;
  userId: string;
  zipCode: string;
  complement?: string | undefined;
  neighborhood?: string | undefined;
  reference?: string | undefined;
};

export type AddressTypeEnum = 'Home' | 'Work' | 'Other';

export type MinimizeAddressType = {
  city: string;
  country: string;
  houseNumber: string;
  state: string;
  street: string;
  zipCode: string;
};
