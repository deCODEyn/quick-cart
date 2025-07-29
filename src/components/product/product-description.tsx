import type { ProductDescriptionType } from '@/types';

export function ProductDescription({ description }: ProductDescriptionType) {
  return (
    <div className="mt-20">
      <div className="flex">
        <p className="border px-5 py-3 font-bold text-sm">Description</p>
        {/* <p className="border px-5 py-3 text-sm"> Reviews (122)</p> */}
      </div>
      <div className="flex flex-col gap-4 border p-6 text-gray-500 text-sm">
        <p>{description}</p>
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
}
