import { Button } from '@/components';
import type { OrderStatusIndicatorType } from '@/types';

export function OrderStatusIndicator({ status }: OrderStatusIndicatorType) {
  let colorClass = '';

  switch (status) {
    case 'Order Placed':
      colorClass = 'bg-gray-300';
      break;
    case 'Ready to ship':
      colorClass = 'bg-gray-500';
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
    <div className="flex justify-between md:w-1/2">
      <div className="ml-15 flex items-center gap-2">
        <p className={`h-2.5 min-w-2.5 rounded-full ${colorClass}`} />
        <p className="text-sm md:text-base">{status}</p>
      </div>
      <Button
        className="cursor-pointer rounded-sm border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-current text-sm hover:bg-gray-300 active:bg-gray-200"
        type="button"
      >
        Track Order
      </Button>
    </div>
  );
}
