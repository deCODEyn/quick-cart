import { useEffect, useState } from 'react';
import {
  Button,
  CartItemCard,
  CartTotal,
  EmptyCart,
  LinkButton,
  Title,
} from '@/components';
import { useShopContext } from '@/context';
import type { CartDisplayItem } from '@/types';

export function Cart() {
  const { products, cartItems, getCartItemCount, clearCart } = useShopContext();
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

  const handleClearCart = () => {
    clearCart();
  };

  return getCartItemCount() !== 0 ? (
    <div className="border-t pt-14">
      <h2 className="mb-3 text-3xl">
        <Title span="cart" title="your" />
      </h2>
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
          <div className="mt-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              className="h-10 cursor-pointer rounded border border-red-500 px-10 py-4 text-red-500 uppercase hover:bg-red-100 active:bg-red-200"
              onClick={handleClearCart}
            >
              clear cart
            </Button>
            <LinkButton
              className="w-full"
              href="/place-order"
              label="proceed to checkout"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
}
