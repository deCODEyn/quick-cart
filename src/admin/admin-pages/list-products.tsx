import { useCallback, useEffect, useState } from 'react';
import { useApiRequest, usePrivateRequest, useToast } from '@/hooks';
import { api } from '@/services/api';
import type {
  ListProductsResponse,
  ProductType,
  SingleProductResponse,
} from '@/types';
import { ProductListItem } from '../admin-components';

export function ListProducts() {
  const [list, setList] = useState<ProductType[]>();
  const { showSuccessToast } = useToast();
  const privateRequest = usePrivateRequest();
  const { isLoading, execute } = useApiRequest();

  const fetchList = useCallback(async () => {
    await execute<ProductType[]>(
      () => api.get<ListProductsResponse>('/products'),
      (products) => {
        setList(products);
      }
    );
  }, [execute]);

  const deleteProduct = useCallback(
    async (productId: string) => {
      await execute<ProductType>(
        () =>
          privateRequest.delete<SingleProductResponse>(
            `/products/${productId}`
          ),
        (_product, message) => {
          showSuccessToast(message);
          fetchList();
        }
      );
    },
    [privateRequest, showSuccessToast, fetchList, execute]
  );

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center rounded-sm border bg-gray-100 px-2 py-1 text-sm md:grid">
          <p className="font-bold">Image</p>
          <p className="font-bold">Name</p>
          <p className="font-bold">Category</p>
          <p className="font-bold">Price</p>
          <p className="text-center font-bold">Action</p>
        </div>
        {!isLoading &&
          list?.map((item) => (
            <ProductListItem
              item={item}
              key={item._id}
              onDelete={deleteProduct}
            />
          ))}
      </div>
    </>
  );
}
