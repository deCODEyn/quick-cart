import type { ImageFiles, ProductFormData } from '@/admin/admin-types';
import { assets } from '@/assets';
import type {
  AddressFormData,
  AuthFormType,
  ChangePasswordType,
  UserType,
} from '@/schemas';
import type { PageLinksType } from '@/types';

//STORE CONTROL
export const allCategories = ['Men', 'Women', 'Kids'];
export const allSubCategories = ['Topwear', 'Bottomwear', 'Winterwear'];
export const allOrdersStatus = [
  'Order placed',
  'Ready to ship',
  'Shipped',
  'Delivered',
  'Cancelled',
];

export const currency = '$';
export const deliveryFee = 10;

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
export const sortOptions = ['Relevant', 'Low-high', 'High-low'];

export const addressTypes = ['Home', 'Work', 'Other'];

//PAYMENT METHODS
export const paymentMethods = [
  { payMethod: 'stripe', logo: assets.stripe_logo, label: undefined },
  { payMethod: 'cod', logo: undefined, label: 'cash on delivery' },
];

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

export const initialAuthFormData: AuthFormType = {
  name: '',
  email: '',
  password: '',
  passwordValidate: '',
  isLogin: true,
};

export const initialChangePasswordFormData: ChangePasswordType = {
  password: '',
  passwordValidate: '',
};

export const initialImages: ImageFiles = {
  image1: null,
  image2: null,
  image3: null,
  image4: null,
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

export const initialProfileFormData: UserType = {
  email: '',
  role: 'User',
  name: '',
  firstName: '',
  middleName: '',
  lastName: '',
  cpf: '',
  rg: '',
  phoneNumber: '',
  socialMedia: {
    instagram: '',
    facebook: '',
    X: '',
    linkedIn: '',
    whatsApp: '',
  },
};
