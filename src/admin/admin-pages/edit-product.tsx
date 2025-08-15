import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks';
import { api } from '@/services/api';
import type { ProductType } from '@/types';
import { ProductForm } from './product-form';

export function EditProduct() {
  const passedProduct = useLocation().state.product as ProductType;
  const { showErrorToast } = useToast();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(passedProduct);
  const navigate = useNavigate();

  useEffect(() => {
    if (!product && id) {
      const fetchProduct = async () => {
        try {
          const response = await api.get<ProductType>(`/products/${id}`);
          setProduct(response.data);
        } catch (_error) {
          showErrorToast('Failed to fetch product');
          navigate('/admin/list');
        }
      };
      fetchProduct();
    }
  }, [id, navigate, showErrorToast, product]);

  if (!product) {
    return <div>Loading product data...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 font-bold text-2xl">Edit Product: {product.name}</h1>
      <ProductForm initialData={product} isEditMode={true} />
    </div>
  );
}
