import { useEffect, useState } from 'react';
import { ProductsGrid, Title } from '@/components';
import { useShopContext } from '@/context';
import type { ProductType, RelatedProductsType } from '@/types';

export function RelatedProducts({
  category,
  subCategory,
  productId,
}: RelatedProductsType) {
  const { products } = useShopContext();
  const [related, setRelated] = useState<ProductType[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      productsCopy = productsCopy.filter((item) => item._id !== productId);

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory, productId]);

  return (
    <div className="my-24">
      <h3 className="mb-5 py-2 text-center text-2xl">
        <Title as="h3" span="products" title="related" />
      </h3>
      <ProductsGrid products={related} />
    </div>
  );
}
