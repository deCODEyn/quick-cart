// import { Star } from 'lucide-react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AddToCartButton,
  ProductDescription,
  ProductImageGalery,
  ProductInfo,
  ProductSizeSelector,
  RelatedProducts,
} from '@/components';
import { ShopContext } from '@/context/shop-context';
import type { ProductType } from '@/types';

export function Product() {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState<ProductType>();
  const [currentSize, setCurrentSize] = useState<string>('');

  const fetchProductData = useCallback(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
    } else {
      setProductData(undefined);
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const handleSelectSize = useCallback((size: string) => {
    setCurrentSize(size);
  }, []);

  return productData ? (
    <div className="border-t-2 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      <div className="flex flex-col gap-12 md:flex-row md:gap-12">
        <ProductImageGalery product={productData} />
        <div className="flex-1">
          <ProductInfo currency={currency} product={productData} />
          {productData.sizes && productData.sizes.length > 0 && (
            <ProductSizeSelector
              currentSize={currentSize}
              onSelectSize={handleSelectSize}
              sizes={productData.sizes}
            />
          )}
          <AddToCartButton
            id={productData._id}
            name={productData.name}
            size={currentSize}
          />
        </div>
      </div>
      <ProductDescription description={productData.description} />
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
