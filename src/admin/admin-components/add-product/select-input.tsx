import type { SelectInputType } from '@/admin/admin-types';

export function SelectInput({
  label,
  name,
  value,
  options,
  onChange,
}: SelectInputType) {
  return (
    <div>
      <h3 className="mb-2 text-lg">{label}</h3>
      <select
        className="w-full rounded-sm border border-gray-400 px-3 py-2"
        name={name}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
