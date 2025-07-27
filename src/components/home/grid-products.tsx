import { ProductItem } from '@/components';
import type { GridProductsType } from '@/types';

export function GridProducts({ products, currency }: GridProductsType) {
  return (
    <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-4 lg:grid-cols-5">
      {products?.map((item) => (
        <ProductItem
          currency={currency}
          id={item._id}
          image={item.image}
          key={item._id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
