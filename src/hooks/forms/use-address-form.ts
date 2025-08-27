import { useCallback, useState } from 'react';
import { initialAddressFormData } from '@/constants';
import { useAddressData } from '@/hooks';
import type { AddressFormData, AddressType } from '@/types';

export function useAddressForm(initialData?: AddressType, isEditMode = false) {
  const startAddressData = () => {
    if (isEditMode && initialData) {
      return {
        ...initialData,
      };
    }
    return initialAddressFormData;
  };
  const { createAddress, updateAddress, isLoading } = useAddressData();
  const [addressData, setAddressData] =
    useState<AddressFormData>(startAddressData);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setAddressData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const buildFormData = useCallback((data: AddressFormData): FormData => {
    const formData = new FormData();
    formData.append('city', data.city);
    formData.append('country', data.country);
    formData.append('houseNumber', data.houseNumber);
    formData.append('state', data.state);
    formData.append('street', data.street);
    formData.append('type', data.type);
    formData.append('zipCode', data.zipCode);
    formData.append('complement', data.complement ?? '');
    formData.append('neighborhood', data.neighborhood ?? '');
    formData.append('reference', data.reference ?? '');
    return formData;
  }, []);

  const onSubmit = useCallback(
    async (
      e: React.FormEvent<HTMLFormElement>
    ): Promise<{ success: boolean; message: string }> => {
      e.preventDefault();
      let success: boolean;
      let message: string | undefined;
      if (isEditMode && initialData?._id) {
        ({ success, message } = await updateAddress(initialData._id, {
          complement: addressData.complement,
          houseNumber: addressData.houseNumber,
          neighborhood: addressData.neighborhood,
          reference: addressData.reference,
          street: addressData.street,
          type: addressData.type,
        }));
      } else {
        const formData = buildFormData(addressData);
        ({ success, message } = await createAddress(formData));
      }
      if (success) {
        setAddressData(initialAddressFormData);
        return { success: true, message: message || 'Operation successful' };
      }
      return { success: false, message: 'Operation failed' };
    },
    [
      addressData,
      isEditMode,
      initialData,
      buildFormData,
      createAddress,
      updateAddress,
    ]
  );

  return {
    addressData,
    handleInputChange,
    onSubmit,
    isLoading,
  };
}
