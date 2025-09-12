import type { MinimizeAddressType } from "@/schemas"
import type { OrderItemType } from "@/types";

export type ManageAddressCardType = {
  address: MinimizeAddressType
}

export type OrderItemsListType = {
  lastItem: boolean;
  order: OrderItemType;
}