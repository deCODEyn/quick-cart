import { Button, Image } from '@/components';
import type { PaymentMethodButtonInterface } from '@/types';

export function PaymentMethodButton({
  method,
  currentMethod,
  onClick,
  label,
  logoSrc,
}: PaymentMethodButtonInterface) {
  const isSelected = currentMethod === method;
  const borderStyle = isSelected
    ? 'border-green-500 bg-green-50 hover:bg-gray-transparent'
    : 'border-gray-400 bg-transparent hover:bg-gray-300';
  const indicatorStyle = isSelected
    ? 'bg-green-500'
    : 'bg-transparent border-gray-500';
  return (
    <Button
      className={`flex cursor-pointer appearance-none justify-start gap-3 border p-2 px-3 focus:outline-none focus-visible:ring-0 ${borderStyle}`}
      onClick={() => onClick(method)}
      type="button"
    >
      <p className={`h-3.5 min-w-3.5 rounded-full border ${indicatorStyle}`} />
      {logoSrc ? (
        <Image alt={`${method} logo`} className="mx-4 h-5" src={logoSrc} />
      ) : (
        <p className="mx-4 font-medium text-gray-600 text-sm uppercase">
          {label}
        </p>
      )}
    </Button>
  );
}
