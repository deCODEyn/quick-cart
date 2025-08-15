import type { AxiosResponse } from 'axios';
import type { ProductType, UserType } from '@/types';

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
  handleError: (err: unknown) => void;
  requestError: string | null;
}

export interface UseApiRequestReturn {
  execute: <T>(
    requestFn: () => Promise<AxiosResponse<ApiResponse<T>>>,
    onSuccess?: (result: T, message: string, success: boolean) => void,
    onFinish?: (value: boolean) => void,
    suppressErrorToast?: boolean
  ) => Promise<void>;
  isLoading: boolean;
  requestError: string | null;
}

export type DeleteProductResponse = ApiResponse<void>;
export type ListProductsResponse = ApiResponse<ProductType[]>;
export type SingleProductResponse = ApiResponse<ProductType>;
export type SingleUserResponse = ApiResponse<UserType>;
