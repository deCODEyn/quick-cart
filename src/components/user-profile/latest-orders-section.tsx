import { Image, Title } from '@/components';
import { mockUserProfile } from '@/constants/mock-user-profile';

export function LatestOrdersSection() {
  return (
    <div className="rounded-md border bg-gray-100 p-5 shadow-md">
      <h2 className="mb-6 font-semibold text-2xl text-gray-800">
        <Title span="orders" title="latest" />
      </h2>
      <div className="grid grid-cols-2 gap-4 gap-y-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
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
