import { useCallback } from 'react';
import type { ProductFormData } from '@/admin/admin-types';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import { api } from '@/services/api';
import type {
  ListProductsResponse,
  ProductType,
  SingleProductResponse,
  UseProductDataReturn,
} from '@/types';

export function useProductData(): UseProductDataReturn {
  const privateRequest = usePrivateRequest();
  const { execute, isLoading } = useApiRequest();

  const createProduct = useCallback(
    async (formData: FormData): Promise<SingleProductResponse> => {
      return await execute<ProductType>(() =>
        privateRequest.post<SingleProductResponse>(
          '/products/admin',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )
      );
    },
    [execute, privateRequest]
  );

  const updateProduct = useCallback(
    async (
      productId: string,
      data: Partial<ProductFormData>
    ): Promise<SingleProductResponse> => {
      return await execute<ProductType>(() =>
        privateRequest.patch<SingleProductResponse>(
          `/products/admin/${productId}`,
          data
        )
      );
    },
    [execute, privateRequest]
  );

  const deleteProduct = useCallback(
    async (productId: string): Promise<SingleProductResponse> => {
      return await execute<ProductType>(() =>
        privateRequest.delete<SingleProductResponse>(
          `/products/admin/${productId}`
        )
      );
    },
    [privateRequest, execute]
  );

  const listProducts = useCallback(async (): Promise<ListProductsResponse> => {
    return await execute<ProductType[]>(() =>
      api.get<ListProductsResponse>('/products')
    );
  }, [execute]);

  const getProduct = useCallback(
    async (productId: string): Promise<SingleProductResponse> => {
      return await execute<ProductType>(() =>
        api.get<SingleProductResponse>(`/products/${productId}`)
      );
    },
    [execute]
  );

  return {
    createProduct,
    updateProduct,
    listProducts,
    getProduct,
    deleteProduct,
    isLoading,
  };
}
