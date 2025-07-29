export interface ProductSizeSelectorInterface {
  onSelectSize: (size: string) => void;
  currentSize: string;
  sizes: string[];
}

export type ArrayProductsType = {
  products: ProductType[];
};

export type ProductDescriptionType = {
  description: string;
};

export type ProductImageType = {
  product: ProductType;
};

export type ProductItemType = {
  id: string;
  image: string[];
  name: string;
  price: number;
};

export type ProductInfoType = {
  currency: string;
  product: ProductType;
};

export type ProductType = {
  _id: string;
  bestseller: boolean;
  category: string;
  date: number;
  description: string;
  name: string;
  image: string[];
  price: number;
  sizes: string[];
  subCategory: string;
};

export type RelatedProductsType = {
  productId: string;
  category: string;
  subCategory: string;
};
