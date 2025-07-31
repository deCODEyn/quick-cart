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
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="font-medium text-sm">
        <DisplayPrice price={price} />
      </p>
    </Link>
  );
}
