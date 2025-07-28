import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components';
import { ShopContext } from '@/context/ShopContext';
import type { ProductItemType } from '@/types';

export function ProductItem({ id, image, name, price }: ProductItemType) {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <Image
          alt={`Imagem do produto ${name}`}
          className="transition ease-in-out hover:scale-110"
          src={image[0]}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="font-medium text-sm">
        {currency} {price}
      </p>
    </Link>
  );
}
