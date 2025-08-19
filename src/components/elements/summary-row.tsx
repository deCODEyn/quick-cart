import { DisplayPrice } from '@/components';
import type { SummaryRowType } from '@/types';

export function SummaryRow({ title, price, isTotal = false }: SummaryRowType) {
  const textStyles = isTotal
    ? 'font-bold uppercase text-gray-700'
    : 'text-gray-500';

  return (
    <>
      <div className={`mx-1 flex justify-between ${textStyles}`}>
        <p>{title}</p>
        <p>
          <DisplayPrice price={price} />
        </p>
      </div>
      {isTotal ? null : <hr className="h-[2px] bg-gray-300" />}
    </>
  );
}
