import { useContext } from 'react';
import { GridProducts, Title } from '@/components';
import { ShopContext } from '@/context/ShopContext';
import type { SectionHomeType } from '@/types/home';

export function SectionHome({
  span,
  title,
  children,
  isBestSeller,
}: SectionHomeType) {
  const { products, currency } = useContext(ShopContext);
  const filteredProducts = isBestSeller
    ? products.filter((item) => item.bestseller).slice(0, 5)
    : products.slice(0, 10);

  return (
    <div className="my-10">
      <Title span={span} title={title} />
      {children}

      <GridProducts currency={currency} products={filteredProducts} />
    </div>
  );
}
