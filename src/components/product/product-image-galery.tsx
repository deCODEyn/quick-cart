import { useEffect, useState } from 'react';
import { Image } from '@/components';
import type { ProductImageType } from '@/types';

export function ProductImageGalery({ product }: ProductImageType) {
  const [currentImage, setCurrentImage] = useState<string>('');

  const handleThumbnailClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  useEffect(() => {
    if (product?.image && product.image.length > 0) {
      setCurrentImage(product.image[0]);
    }
  }, [product]);

  return (
    <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
      <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
        {product.image.map((item) => (
          <Image
            alt={`Other image of ${product.name}`}
            className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
            key={item}
            onClick={() => handleThumbnailClick(item)}
            src={item}
          />
        ))}
      </div>
      <div className="w-full sm:w-[80%]">
        {currentImage ? (
          <Image
            alt={`Main image of ${product.name}`}
            className="h-auto w-full"
            src={currentImage}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
            <p>Loading image...</p>
          </div>
        )}
      </div>
    </div>
  );
}
