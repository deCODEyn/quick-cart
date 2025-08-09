// import { Star } from "lucide-react";
import { currency } from '@/constants';
import type { ProductInfoType } from '@/types';

export function ProductInfo({ product }: ProductInfoType) {
  return (
    <>
      <h1 className="mt-2 font-medium text-2xl">{product.name}</h1>
      <div className="mt-2 flex items-center gap-1">
        {/* <Star className="w-4" color="gold" fill="gold" />
        <Star className="w-4" color="gold" fill="gold" />
        <Star className="w-4" color="gold" fill="gold" />
        <Star className="w-4" color="gold" fill="gold" />
        <Star className="w-4" color="#c9c9c9" fill="#c9c9c9" />
        <p className="pl-2">(122)</p> */}
      </div>
      <p className="mt-5 font-medium text-2xl">
        {currency} {product.price}
      </p>
      <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>
      <hr className="mt-5 sm:w-4/5" />
      <div className="my-2 flex flex-col gap-1 text-gray-500 text-sm">
        <p>100% Original product.</p>
        <p>Cash on delivery is available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
      </div>
      <hr className="mb-5 sm:w-4/5" />
    </>
  );
}
