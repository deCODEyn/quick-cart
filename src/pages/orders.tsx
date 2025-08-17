import { OrderItem, OrderStatusIndicator, Title } from '@/components';
import { useShopContext } from '@/context';

export function Orders() {
  const { products } = useShopContext();
  // Implementar lógica de acesso as ordens de compras do usuário.
  // De momento informações estão estáticas com 3 itens para exemplo de como frontend irá se comportar.

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title span="orders" title="my" />
      </div>
      <div className="border-t">
        {products.slice(0, 3).map((item) => (
          <div
            className="flex flex-col gap-4 border-b py-4 text-gray-700 md:flex-row md:items-center md:justify-between"
            key={item._id}
          >
            <OrderItem product={item} quantity={1} size="M" />
            <OrderStatusIndicator status="Delivered" />
          </div>
        ))}
      </div>
    </div>
  );
}
