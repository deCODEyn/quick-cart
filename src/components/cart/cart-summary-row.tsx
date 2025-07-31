import { DisplayPrice } from '@/components';
import type { CartSummaryRowType } from '@/types';

export function CartSummaryRow({
  title,
  price,
  isTotal = false,
}: CartSummaryRowType) {
  const textStyles = isTotal ? 'font-bold' : '';

  return (
    <>
      <div className={`flex justify-between ${textStyles}`}>
        <p>{title}</p>
        <p>
          <DisplayPrice price={price} />
        </p>
      </div>
      {isTotal ? null : <hr className="h-[2px] bg-gray-400 text-gray-400" />}
    </>
  );
}
