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
    <div className="flex flex-col">
      {label && (
        <label
          className="mb-1 font-medium text-gray-700 text-sm"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className="w-full rounded border border-gray-300 px-3.5 py-1.5 focus:outline-none focus:ring-2"
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
