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
          <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-4">
            <Button
              className="mt-4 h-12 cursor-pointer rounded border border-red-500 px-8 py-3 font-medium text-red-500 uppercase hover:bg-red-50 active:bg-red-100 sm:mt-0"
              onClick={handleClearCart}
            >
              clear cart
            </Button>
            <LinkButton href="/place-order" label="proceed to checkout" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
}
