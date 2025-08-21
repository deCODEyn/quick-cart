import { ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image, Title } from '@/components';
import { mockUserProfile } from '@/constants/mock-user-profile';

export function LatestOrdersSection() {
  return (
    <div className="rounded-md border bg-gray-50 p-5 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl text-gray-800">
          <Title span="orders" title="latest" />
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
        {mockUserProfile.lastOrders.map((order) => (
          <div className="flex flex-col items-center" key={order.id}>
            <div className="h-20 w-20 overflow-hidden rounded-lg border border-gray-300">
              <Image
                alt={order.items[0].name}
                className="h-full w-full object-cover"
                src={order.items[0].image}
              />
            </div>
            <span className="mt-2 text-center text-gray-700 text-sm">
              Pedido #{order.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
