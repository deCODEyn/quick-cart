import { useContext } from 'react';
import { Button, DisplayPrice, Image, Title } from '@/components';
import { ShopContext } from '@/context/shop-context';

export function Orders() {
  const { products } = useContext(ShopContext);
  // Implementar lógica de acesso as ordens de compras do usuário.
  // De momento informações estão estáticas com 3 itens para exemplo de como frontend irá se comportar.

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title span="orders" title="my" />
      </div>
      <div className="border-t">
        {products.slice(1, 4).map((item) => (
          <div
            className="flex flex-col gap-4 border-b py-4 text-gray-700 md:flex-row md:items-center md:justify-between"
            key={item._id}
          >
            <div className="flex items-start gap-6 text-sm">
              <Image
                alt={`imagem de ${item.name}`}
                className="w-16 sm:w-20"
                src={item.image[0]}
              />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="mt-2 flex items-center gap-3 text-base text-gray-700">
                  <DisplayPrice price={item.price} />
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-4">
                  Date: <span className="text-gray-400">01, Aug, 2025</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="h-2 min-w-2 rounded-full bg-green-500" />
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <Button
                className="cursor-pointer rounded-sm border border-gray-300 px-4 py-2 font-medium text-sm active:bg-gray-200"
                type="button"
              >
                Track Order
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
