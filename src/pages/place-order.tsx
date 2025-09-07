import { Plus } from 'lucide-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AddressList,
  Button,
  CartTotal,
  LinkButton,
  PaymentMethodButton,
  Title,
} from '@/components';
import { paymentMethods } from '@/constants';
import { usePlaceOrder, useToast } from '@/hooks';

export function PlaceOrder() {
  const {
    addresses,
    selectedAddressId,
    handleSelectAddress,
    method,
    setMethod,
    isPlaceOrderDisabled,
    handlePlaceOrder,
  } = usePlaceOrder();
  const { showErrorToast, showSuccessToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    if (!(selectedAddressId && method)) {
      showErrorToast('Please select both delivery address and payment method');
      return;
    }
    const { success, message } = await handlePlaceOrder();
    if (success) {
      showSuccessToast(message || '');
      navigate('/orders');
      return;
    }
  }, [
    selectedAddressId,
    method,
    showErrorToast,
    showSuccessToast,
    navigate,
    handlePlaceOrder,
  ]);

  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <h1 className="my-3 text-xl sm:text-2xl">
          <Title as="h1" span="information" title="delivery" />
        </h1>
        <LinkButton href="/address/add" label="add address">
          <Plus className="size-4" />
        </LinkButton>
        <AddressList
          addresses={addresses}
          onSelect={handleSelectAddress}
          selectedId={selectedAddressId}
        />
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
            {paymentMethods.map(({ payMethod, logo, label }) => (
              <PaymentMethodButton
                currentMethod={method || ''}
                key={payMethod}
                label={label}
                logoSrc={logo}
                method={payMethod}
                onClick={setMethod}
              />
            ))}
          </div>
          <div className="mt-8 w-full text-end">
            <Button
              className={`cursor-pointer rounded-md px-4 py-2 font-semibold text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isPlaceOrderDisabled
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-black hover:bg-gray-800 focus:ring-black'
              }`}
              onClick={handleSubmit}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
