import { Input, Label } from '@/components';
import type { InputFormInterface } from '@/types';

export function InputForm({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}: InputFormInterface) {
  return (
    <div className="flex flex-1 flex-col">
      {label && (
        <Label
          className="mb-1 font-medium text-gray-700 text-sm"
          htmlFor={name}
        >
          {label}
        </Label>
      )}
      <Input
        className="w-full rounded border-2 border-gray-300 px-3.5 py-1.5 focus:outline-none focus-visible:border-gray-500 focus-visible:ring-0"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
}
