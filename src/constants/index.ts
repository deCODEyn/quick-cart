import type { ImageFiles, ProductData } from '@/admin/admin-types';
import type { FormDeliveryData, PageLinksType } from '@/types';

export const currency = '$';

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export const allCategories = ['Men', 'Women', 'Kids'];

export const allSubCategories = ['Topwear', 'Bottomwear', 'Winterwear'];

export const links: PageLinksType[] = [
  { label: 'home', href: '/' },
  { label: 'collection', href: '/collection' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

export const initialDeliveryData: FormDeliveryData = {
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  houseNumber: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  phone: '',
};

export const initialProductData: ProductData = {
  name: '',
  description: '',
  price: '',
  category: 'Men',
  subCategory: 'Topwear',
  bestseller: false,
  sizes: [],
};

export const initialImages: ImageFiles = {
  image1: null,
  image2: null,
  image3: null,
  image4: null,
};
