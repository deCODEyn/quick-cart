import type { SizesSelectorType } from '@/admin/admin-types';
import { Button } from '@/components';
import { sizes } from '@/constants';

export function SizesSelector({
  selectedSizes,
  handleSizeToggle,
}: SizesSelectorType) {
  return (
    <div>
      <h3 className="mb-2 text-lg">Product Sizes</h3>
      <div className="flex">
        {sizes.map((size) => (
          <Button
            className={`mx-1 h-10 w-10 cursor-pointer border-2 px-4 py-2 text-gray-700 ${selectedSizes.includes(size) ? 'border-orange-400 bg-orange-100 hover:bg-orange-300' : 'border-gray-400 bg-gray-100 hover:bg-gray-300'}`}
            key={size}
            onClick={() => handleSizeToggle(size)}
            type="button"
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}
