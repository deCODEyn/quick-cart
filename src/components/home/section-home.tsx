import { useContext } from 'react';
import { ProductsGrid, Title } from '@/components';
import { ShopContext } from '@/context/shop-context';
import type { SectionHomeType } from '@/types';

export function SectionHome({
  span,
  title,
  children,
  isBestSeller,
}: SectionHomeType) {
  const { products } = useContext(ShopContext);
  const filteredProducts = isBestSeller
    ? products.filter((item) => item.bestseller).slice(0, 5)
    : products.slice(0, 10);

  return (
    <div className="my-10">
      <div className="pt-8 pb-4 text-center text-3xl">
        <Title span={span} title={title} />
      </div>
      {children}
      <ProductsGrid products={filteredProducts} />
    </div>
  );
}
