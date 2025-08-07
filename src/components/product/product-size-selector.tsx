import { Button } from '@/components';
import type { ProductSizeSelectorInterface } from '@/types';

export function ProductSizeSelector({
  sizes,
  currentSize,
  onSelectSize,
}: ProductSizeSelectorInterface) {
  return (
    <div className="my-8 flex flex-col gap-4">
      <p>Select Size</p>
      <div className="flex gap-2">
        {sizes.map((item) => (
          <Button
            className={`h-10 cursor-pointer border-2 border-gray-400 bg-gray-100 px-4 py-2 ${item === currentSize ? 'border-orange-500' : ''}`}
            key={item}
            onClick={() => onSelectSize(item)}
            type="button"
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
