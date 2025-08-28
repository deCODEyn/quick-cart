import { ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductItem, Title } from '@/components';
import { useFilterLatestOrders } from '@/hooks';

export function LatestOrdersSection() {
  const ordersItems = useFilterLatestOrders();

  return (
    <div className="rounded-md border bg-gray-50 p-5 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl text-gray-800">
          <Title span="orders items" title="latest" />
        </h2>
        <Link
          className="-mt-5 flex h-8 cursor-pointer gap-2 rounded border border-gray-600 bg-gray-300 p-2 font-semibold text-[0.7rem] text-gray-900 uppercase hover:bg-gray-400 active:bg-gray-200"
          to="/orders"
        >
          <ClipboardCheck className="size-4" />
          My Orders
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {ordersItems?.map((order, index) => (
          <ProductItem
            id={order.id}
            image={order.image}
            key={`${order.id} - ${index}`}
            name={order.name}
            price={order.price}
          />
        ))}
      </div>
    </div>
  );
}
