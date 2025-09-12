import type { MinimizeAddressType } from '@/schemas';
import type { CartDisplayItem } from './cart';

export interface OrderCardInterface {
  onRefresh: () => Promise<void>;
  order: OrderType;
}

export interface OrderStatusIndicatorInterface {
  onRefresh: () => Promise<void>;
  status: OrderStatusEnunType;
}

export type CreateOrderType = {
  addressId: string;
  items: CartDisplayItem[];
  deliveryFee: number;
  paymentMethod: string;
};

export type OrderItemType = {
  _id?: string;
  product: OrderUnitProduct;
  quantity: number;
  size: string;
};

export type OrderStatusEnunType =
  | 'Order placed'
  | 'Ready to ship'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled';

export type OrderTotalType = {
  amount: number;
  deliveryFee: number;
};

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
  userId: string;
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
