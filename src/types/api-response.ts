import type { AxiosResponse } from 'axios';
import type { AddressType, UserType } from '@/schemas';
import type { CartDisplayItem, OrderType, ProductType } from '@/types';

export interface ApiResponse<T> {
  result?: T;
  message?: string;
  success: boolean;
}

export interface ApiErrorResponse {
  errors?: ValidationError[];
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface UseApiRequestErrorHandlingReturn {
  handleError: (err: unknown, suppressErrorToast: boolean) => void;
  requestError: string | null;
}

export interface UseApiRequestReturn {
  execute: <T>(
    requestFn: () => Promise<AxiosResponse<ApiResponse<T>>>,
    suppressErrorToast?: boolean
  ) => Promise<ApiResponse<T>>;
  isLoading: boolean;
  requestError: string | null;
}

export type ListAddressesResponse = ApiResponse<AddressType[]>;
export type ListCartItemsResponse = ApiResponse<CartDisplayItem[]>;
export type ListProductsResponse = ApiResponse<ProductType[]>;
export type ListOrdersResponse = ApiResponse<OrderType[]>;

export type SingleAddressResponse = ApiResponse<AddressType>;
export type SingleProductResponse = ApiResponse<ProductType>;
export type SingleUserResponse = ApiResponse<UserType>;
