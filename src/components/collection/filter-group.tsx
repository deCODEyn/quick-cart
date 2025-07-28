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
      <div className="flex flex-col gap-2 font-light text-gray-700 text-sm">
        {options.map((option) => (
          <p className="flex gap-2" key={option}>
            <input
              checked={selectedOptions.includes(option)}
              className="w-3"
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
