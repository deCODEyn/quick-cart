import { useLocation } from 'react-router-dom';
import { ProductForm } from '@/admin/admin-components';
import { LoadingData } from '@/components';
import type { ProductType } from '@/types';

export function EditProduct() {
  const product = useLocation().state.product as ProductType;

  if (!product) {
    return <LoadingData data="product data" />;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 font-bold text-2xl">Edit Product</h1>
      <ProductForm initialData={product} isEditMode={true} />
    </div>
  );
}
