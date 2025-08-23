export type AddressCardType = {
  address: AddressType;
};

export type AddressType = {
  _id: string;
  city: string;
  country: string;
  houseNumber: string;
  state: string;
  street: string;
  type: AddressTypeEnum;
  userId: string;
  zipCode: string;
  complement?: string | undefined;
  neighborhood?: string | undefined;
  reference?: string | undefined;
};

export type AddressTypeEnum = 'Home' | 'Work' | 'Other';

export type MinimizeAddressType = {
  city: string;
  country: string;
  houseNumber: string;
  state: string;
  street: string;
  zipCode: string;
};
