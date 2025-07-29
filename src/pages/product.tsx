import { Star } from 'lucide-react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, RelatedProducts } from '@/components';
import { ShopContext } from '@/context/ShopContext';
import type { ProductType } from '@/types';

export function Product() {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState<ProductType>();
  const [currentImage, setCurrentImage] = useState<string>('');
  const [currentSize, setCurrentSize] = useState('');

  const fetchProductData = useCallback(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setCurrentImage(foundProduct.image[0]);
    } else {
      setProductData(undefined);
      setCurrentImage('');
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const handleThumbnailClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return productData ? (
    <div className="border-t-2 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      <div className="flex flex-col gap-12 md:flex-row md:gap-12">
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
            {productData.image.map((item, index) => (
              <Image
                alt="Other product image"
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
                key={index + item}
                onClick={() => handleThumbnailClick(item)}
                src={item}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <Image
              alt="Main image"
              className="h-auto w-full"
              src={currentImage}
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="mt-2 font-medium text-2xl">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <Star className="w-4" color="gold" fill="gold" />
            <Star className="w-4" color="gold" fill="gold" />
            <Star className="w-4" color="gold" fill="gold" />
            <Star className="w-4" color="gold" fill="gold" />
            <Star className="w-4" color="#c9c9c9" fill="#c9c9c9" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 font-medium text-2xl">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`cursor-pointer border-2 border-gray-400 bg-gray-100 px-4 py-2 ${item === currentSize ? 'border-orange-500' : ''}`}
                  key={index + item}
                  onClick={() => setCurrentSize(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="cursor-pointer bg-black px-8 py-3 text-sm text-white active:bg-gray-700"
            type="button"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-gray-500 text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-gray-500 text-sm">
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
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        productId={productData._id}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0" />
  );
}
