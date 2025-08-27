import type { ImageFiles, ProductFormData } from '@/admin/admin-types';
import type {
  AuthFormData,
  ChangePasswordFormData,
  FormDeliveryFormData,
  PageLinksType,
} from '@/types';

export const currency = '$';

export const deliveryFee = 10;

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export const sortOptions = ['Relevant', 'Low-high', 'High-low'];

export const allCategories = ['Men', 'Women', 'Kids'];

export const allSubCategories = ['Topwear', 'Bottomwear', 'Winterwear'];

export const links: PageLinksType[] = [
  { label: 'home', href: '/' },
  { label: 'collection', href: '/collection' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

export const initialAuthFormData: AuthFormData = {
  name: '',
  email: '',
  password: '',
  passwordValidate: '',
};

export const initialChangePasswordFormData: ChangePasswordFormData = {
  password: '',
  passwordValidate: '',
};

export const initialDeliveryFormData: FormDeliveryFormData = {
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
