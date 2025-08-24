import { useCallback, useEffect } from 'react';
import { ProductListItem } from '@/admin/admin-components';
import { useShopContext } from '@/context';
import { useProductData, useToast } from '@/hooks';

export function ListProducts() {
  const { products, getProducts } = useShopContext();
  const { showSuccessToast } = useToast();
  const { deleteProduct, isLoading } = useProductData();

  const handleDelete = useCallback(
    async (productId: string) => {
      const { success, message } = await deleteProduct(productId);
      if (success) {
        showSuccessToast(message || '');
        getProducts();
      }
    },
    [deleteProduct, showSuccessToast, getProducts]
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <h1 className="mb-4 font-bold text-2xl">All Products List</h1>
      <div className="flex flex-col gap-2">
        <div className="hidden grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center rounded-sm border bg-gray-100 px-2 py-1 text-sm md:grid">
          <p className="font-bold">Image</p>
          <p className="font-bold">Name</p>
          <p className="font-bold">Category</p>
          <p className="font-bold">Price</p>
          <p className="text-center font-bold">Action</p>
        </div>
        {!isLoading &&
          products?.map((item) => (
            <ProductListItem
              item={item}
              key={item._id}
              onDelete={handleDelete}
            />
          ))}
      </div>
    </>
  );
}
