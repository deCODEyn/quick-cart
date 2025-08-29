import type { ImageFiles, ProductFormData } from '@/admin/admin-types';
import type { AddressFormData, PageLinksType } from '@/types';

//STORE CONTROL
export const allCategories = ['Men', 'Women', 'Kids'];
export const allSubCategories = ['Topwear', 'Bottomwear', 'Winterwear'];

export const currency = '$';
export const deliveryFee = 10;

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
export const sortOptions = ['Relevant', 'Low-high', 'High-low'];

export const addressTypes = ['Home', 'Work', 'Other'];

//NAVIGATION
export const links: PageLinksType[] = [
  { label: 'home', href: '/' },
  { label: 'collection', href: '/collection' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

//INITIAL FORM DATA
export const initialAddressFormData: AddressFormData = {
  city: '',
  country: '',
  houseNumber: '',
  state: '',
  street: '',
  type: 'Other',
  zipCode: '',
  complement: '',
  neighborhood: '',
  reference: '',
};

export const initialAuthFormData = {
  name: '',
  email: '',
  password: '',
  passwordValidate: '',
  isLogin: true,
};

export const initialChangePasswordFormData = {
  password: '',
  passwordValidate: '',
};

export const initialProductFormData: ProductFormData = {
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
