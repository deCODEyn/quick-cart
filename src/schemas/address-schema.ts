import z from 'zod';
import { addressTypes } from '@/constants';

export const addressTypeEnum = z.enum(addressTypes);
export type addressTypeEnum = z.infer<typeof addressTypeEnum>;

export const addressSchema = z.object({
  type: addressTypeEnum,
  street: z.string().min(1, 'Street is required'),
  houseNumber: z.string().min(1, 'House number is required'),
  zipCode: z.string().min(1, 'Zip Code is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  neighborhood: z.string().optional(),
  complement: z.string().optional(),
  reference: z.string().optional(),
  _id: z.string(),
  userId: z.string(),
});
export type AddressType = z.infer<typeof addressSchema>;

export const addressFormSchema = addressSchema.omit({
  _id: true,
  userId: true,
});
export type AddressFormData = z.infer<typeof addressFormSchema>;

export const minimizeAddressSchema = addressSchema.pick({
  city: true,
  country: true,
  houseNumber: true,
  state: true,
  street: true,
  zipCode: true,
});
export type MinimizeAddressType = z.infer<typeof minimizeAddressSchema>;
