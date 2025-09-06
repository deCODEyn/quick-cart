import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { initialAddressFormData } from '@/constants';
import { useAddressData } from '@/hooks';
import {
  type AddressFormData,
  type AddressType,
  addressFormSchema,
} from '@/schemas';

export function useAddressForm(initialData?: AddressType, isEditMode = false) {
  const { createAddress, updateAddress, isLoading } = useAddressData();
  const form = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: initialData ?? initialAddressFormData,
    mode: 'onBlur',
  });

  const onSubmit = async (data: AddressFormData) => {
    let success: boolean;
    let message: string | undefined;

    if (isEditMode && initialData?._id) {
      ({ success, message } = await updateAddress(initialData._id, data));
    } else {
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value ?? '');
      }
      ({ success, message } = await createAddress(formData));
    }

    return {
      success,
      message:
        message || (success ? 'Operation successful' : 'Operation failed'),
    };
  };

  return { form, onSubmit, isLoading };
}
