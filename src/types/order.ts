import type { MinimizeAddressType } from './address';

export type OrderCardType = {
  order: OrderType;
};

export type OrderItemType = {
  _id?: string;
  product: OrderUnitProduct;
  quantity: number;
  size: string;
};

export type OrderStatusIndicatorType = {
  status: OrderStatusEnunType;
};

export type OrderStatusEnunType =
  | 'Order Placed'
  | 'Ready to ship'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled';

export type OrderTotalType = {
  amount: number;
  deliveryFee: number;
}

export type OrderType = {
  _id: string;
  address: MinimizeAddressType;
  amount: number;
  createdAt: string;
  items: OrderItemType[];
  deliveryFee: number;
  payment: string;
  paymentMethod: string;
  status: OrderStatusEnunType;
};

export type OrderUnitProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type ProductOrderType = {
  orderItem: OrderItemType;
};
