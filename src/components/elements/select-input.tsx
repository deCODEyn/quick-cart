import type { SelectInputType } from '@/admin/admin-types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';

export function SelectInput({
  label,
  value,
  options,
  onChange,
}: SelectInputType) {
  const placeholderText = `${label}`;

  return (
    <div>
      <h3 className="mb-2 text-lg">{label}</h3>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="h-10 w-full rounded border border-gray-500 px-2 text-gray-900 text-sm">
          <SelectValue placeholder={placeholderText} />
        </SelectTrigger>
        <SelectContent className="border-gray-500 bg-white">
          {options.map((option) => (
            <SelectItem
              className="hover:bg-gray-200 focus:bg-gray-300"
              key={option}
              value={option}
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
