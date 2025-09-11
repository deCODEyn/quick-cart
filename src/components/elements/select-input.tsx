import type { SelectInputType } from '@/admin/admin-types';
import {
  Label,
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
  className,
}: SelectInputType) {
  return (
    <div>
      {label && (
        <Label className={`${className} font-medium text-lg`}>{label}</Label>
      )}
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="h-10 w-full rounded border border-gray-500 px-2 text-gray-900 text-sm">
          <SelectValue />
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
