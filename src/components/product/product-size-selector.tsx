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
            className={`h-10 w-10 cursor-pointer border-2 px-4 py-2 text-gray-700 ${item === currentSize ? 'border-orange-600 bg-orange-100 hover:bg-orange-300' : 'border-gray-400 bg-gray-100 hover:bg-gray-300'}`}
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
