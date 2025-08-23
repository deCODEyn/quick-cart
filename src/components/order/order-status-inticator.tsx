import { Button } from '@/components';
import type { OrderStatusIndicatorType } from '@/types';

export function OrderStatusIndicator({ status }: OrderStatusIndicatorType) {
  let colorClass = '';

  switch (status) {
    case 'Order Placed':
      colorClass = 'bg-gray-500';
      break;
    case 'Ready to ship':
      colorClass = 'bg-yellow-500';
      break;
    case 'Shipped':
      colorClass = 'bg-blue-500';
      break;
    case 'Delivered':
      colorClass = 'bg-green-500';
      break;
    case 'Cancelled':
      colorClass = 'bg-red-500';
      break;
    default:
      colorClass = 'bg-black';
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center gap-1">
        <p className={`h-2.5 min-w-2.5 rounded-full ${colorClass}`} />
        <p className="text-xs md:text-base">{status}</p>
      </div>
      <Button
        className="h-8 cursor-pointer rounded border border-gray-600 bg-gray-300 px-2 py-1 text-[0.7rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
        type="button"
      >
        Track Order
      </Button>
    </div>
  );
}
