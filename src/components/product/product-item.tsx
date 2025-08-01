import { Link } from 'react-router-dom';
import { DisplayPrice, Image } from '@/components';
import type { ProductItemType } from '@/types';

export function ProductItem({ id, image, name, price }: ProductItemType) {
  return (
    <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <Image
          alt={`Product image of the ${name}`}
          className="transition ease-in-out hover:scale-110"
          src={image[0]}
        />
      </div>
      <p className="h-12 pt-3 pb-1 text-sm lg:h-8">{name}</p>
      <p className="mb-6 font-medium text-sm md:mt-5">
        <DisplayPrice price={price} />
      </p>
    </Link>
  );
}
