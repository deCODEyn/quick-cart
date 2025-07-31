import { useContext, useEffect, useState } from 'react';
import { ProductsGrid, Title } from '@/components';
import { ShopContext } from '@/context/shop-context';
import type { ProductType, RelatedProductsType } from '@/types';

export function RelatedProducts({
  category,
  subCategory,
  productId,
}: RelatedProductsType) {
  const { products } = useContext(ShopContext);
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
      <div className="py-2 text-center text-3xl">
        <Title span="products" title="related" />
      </div>
      <ProductsGrid products={related} />
    </div>
  );
}
