export type ArrayProductsType = {
  products: ProductType[];
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
