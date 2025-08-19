import type { AxiosResponse } from 'axios';
import type {
  CartDisplayItem,
  OrderType,
  ProductType,
  UserType,
} from '@/types';

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
  ) => Promise<{ success: boolean; result: T | null; message: string | null }>;
  isLoading: boolean;
  requestError: string | null;
  requestSuccess: boolean;
}

export type ListCartItemsResponse = ApiResponse<CartDisplayItem[]>;
export type ListProductsResponse = ApiResponse<ProductType[]>;
export type ListOrdersResponse = ApiResponse<OrderType[]>;

export type SingleProductResponse = ApiResponse<ProductType>;
export type SingleUserResponse = ApiResponse<UserType>;
