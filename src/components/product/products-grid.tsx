import { ProductItem } from '@/components';
import type { ArrayProductsType } from '@/types';

export function ProductsGrid({ products }: ArrayProductsType) {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-600">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products?.map((item) => (
        <ProductItem
          id={item._id}
          image={item.image[0]}
          key={item._id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
