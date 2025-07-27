export type GridProductsType = {
  products: ProductsType[];
  currency: string;
};

export type ProductItemType = {
  id: string;
  image: string[];
  name: string;
  price: number;
  currency: string;
};

export type ProductsType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
};
