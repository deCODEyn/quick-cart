import type { ProductType } from "@/types";

export type OrderItemType = {
  product: ProductType;
  quantity: number;
  size: string;
}

export type OrderStatusIndicatorType = {
  status: 'Ready to ship' | 'Shipped' | 'Delivered' | 'Cancelled';
}
