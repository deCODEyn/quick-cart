import { useContext, useEffect, useState } from 'react';
import {
  CartItemCard,
  CartTotal,
  EmptyCart,
  LinkButton,
  Title,
} from '@/components';
import { ShopContext } from '@/context/shop-context';
import type { CartDisplayItem } from '@/types';

export function Cart() {
  const { products, cartItems, getCartItemCount } = useContext(ShopContext);
  const [cartData, setCartData] = useState<CartDisplayItem[]>([]);

  useEffect(() => {
    const transformedCartData: CartDisplayItem[] = Object.entries(
      cartItems
    ).flatMap(([productId, sizes]) =>
      Object.entries(sizes).map(([size, quantity]) => ({
        id: productId,
        size,
        quantity,
      }))
    );
    setCartData(transformedCartData);
  }, [cartItems]);

  return getCartItemCount() !== 0 ? (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title span="cart" title="your" />
      </div>
      <div className="border-b-2">
        {cartData.map((item) => {
          const productData = products.find(
            (product) => product._id === item.id
          );

          return productData ? (
            <CartItemCard
              item={item}
              key={`${item.id}-${item.size}`}
              product={productData}
            />
          ) : null;
        })}
      </div>
      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full pt-10 text-end">
            <LinkButton href="/place-order" label="proceed to checkout" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
}
