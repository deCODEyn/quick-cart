export interface ProductSizeSelectorInterface {
  onSelectSize: (size: string) => void;
  currentSize: string;
  sizes: string[];
}

export type ArrayProductsType = {
  products: ProductType[];
};

export type ImageFiles = {
  image1: File | null;
  image2: File | null;
  image3: File | null;
  image4: File | null;
};

export type ProductDescriptionType = {
  description: string;
};

export type ProductData = {
  bestseller: boolean;
  category: string;
  description: string;
  name: string;
  price: number | string;
  sizes: string[];
  subCategory: string;
};

export type ProductInfoType = {
  product: ProductType;
};

export type ProductItemType = {
  id: string;
  image: string[];
  name: string;
  price: number;
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
