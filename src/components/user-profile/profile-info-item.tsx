import type { ProfileInfoItemType } from '@/types';

export function ProfileInfoItem({
  icon: Icon,
  label,
  value,
}: ProfileInfoItemType) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      {Icon && <Icon className="size-4" />}
      <div className="flex flex-row gap-2">
        {label && <p className="font-semibold">{label}: </p>}
        <p>{value || 'Not informed'}</p>
      </div>
    </div>
  );
}
