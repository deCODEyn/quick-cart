import type { ProductType } from '@/types';

export interface ProductListItemType {
  onDelete: (id: string) => void;
  // onEdit: () => void;
  item: ProductType;
}
