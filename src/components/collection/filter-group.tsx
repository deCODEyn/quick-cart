import { Input } from '@/components';
import type { FilterGroupInterface } from '@/types';

export function FilterGroup({
  title,
  options,
  selectedOptions,
  onToggle,
}: FilterGroupInterface) {
  return (
    <div>
      <p className="mb-3 font-medium text-sm uppercase">{title}</p>
      <div className="flex flex-col font-light text-gray-700 text-sm">
        {options.map((option) => (
          <p className="flex justify-start gap-2" key={option}>
            <Input
              checked={selectedOptions.includes(option)}
              className="h-5 w-3"
              onChange={() => onToggle(option)}
              type="checkbox"
              value={option}
            />
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
