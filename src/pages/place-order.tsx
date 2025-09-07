import { Plus } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '@/assets';
import {
  AddressCard,
  Button,
  CartTotal,
  LinkButton,
  PaymentMethodButton,
  Title,
} from '@/components';
import { deliveryFee } from '@/constants';
import { useShopContext } from '@/context';
import { useAddressData, useOrdersData, useToast } from '@/hooks';
import type { AddressType } from '@/schemas';
import { transformCartItems } from '@/utils/transform-cart-items';

export function PlaceOrder() {
  const [method, setMethod] = useState<string | null>(null);
  const { listAddresses } = useAddressData();
  const { cartItems, clearCart } = useShopContext();
  const { createOrder } = useOrdersData();
  const [addresses, setAddresses] = useState<AddressType[] | undefined>();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );
  const { showErrorToast, showSuccessToast } = useToast();
  const navigate = useNavigate();
  const isPlaceOrderDisabled = !(selectedAddressId && method);

  const fetchAddresses = useCallback(async () => {
    setAddresses((await listAddresses()).result);
  }, [listAddresses]);

  const handleSelectAddress = useCallback((addressId: string) => {
    setSelectedAddressId(addressId);
  }, []);

  const handlePlaceOrder = useCallback(async () => {
    if (!(selectedAddressId && method)) {
      showErrorToast('Please select both delivery address and payment method');
      return;
    }
    const items = transformCartItems(cartItems);
    const orderPayload = {
      addressId: selectedAddressId,
      items,
      deliveryFee,
      paymentMethod: method,
    };
    const { success, message } = await createOrder(orderPayload);
    if (success) {
      showSuccessToast(message || '');
      clearCart();
      navigate('/orders');
      return;
    }
  }, [
    selectedAddressId,
    method,
    showErrorToast,
    cartItems,
    showSuccessToast,
    createOrder,
    clearCart,
    navigate,
  ]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <h1 className="my-3 text-xl sm:text-2xl">
          <Title as="h1" span="information" title="delivery" />
        </h1>
        <LinkButton href="/address/add" label="add address">
          <Plus className="size-4" />
        </LinkButton>
        {addresses?.map((address) => (
          <div
            className={`flex cursor-pointer rounded-md ${selectedAddressId === address._id ? 'border-2 border-green-400 shadow-lg' : 'border border-gray-200'} `}
            key={address._id}
          >
            <Button
              className="block h-full w-full cursor-pointer appearance-none bg-transparent p-0 text-start text-gray-900 text-lg hover:bg-transparent"
              onClick={() => handleSelectAddress(address._id)}
            >
              <AddressCard address={address} allowToEdit={false} />
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <h4 className="text-base">
            <Title as="h4" span="method" title="payment" />
          </h4>
          <div className="flex flex-col gap-3 lg:flex-row">
            <PaymentMethodButton
              currentMethod={method || ''}
              logoSrc={assets.stripe_logo}
              method="stripe"
              onClick={setMethod}
            />
            <PaymentMethodButton
              currentMethod={method || ''}
              logoSrc={assets.razorpay_logo}
              method="razorpay"
              onClick={setMethod}
            />
            <PaymentMethodButton
              currentMethod={method || ''}
              label="cash on delivery"
              method="cod"
              onClick={setMethod}
            />
          </div>
          <div className="mt-8 w-full text-end">
            <Button
              className={`cursor-pointer rounded-md px-4 py-2 font-semibold text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isPlaceOrderDisabled
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-black hover:bg-gray-800 focus:ring-black'
              }`}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
