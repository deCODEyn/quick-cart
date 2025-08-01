import { useState } from 'react';
import {
  CartTotal,
  FormDelivery,
  LinkButton,
  PaymentMethodButton,
  Title,
} from '@/components';
import type { FormDeliveryData } from '@/types';
import { assets } from '@/utils/assets';

export function PlaceOrder() {
  const [method, setMethod] = useState('cod');

  const handleDeliverySubmit = (formData: FormDeliveryData) => {
    // biome-ignore lint/suspicious/noConsole: used for development only
    console.log('Form data:', formData);
  };

  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title span="information" title="delivery" />
        </div>
        <FormDelivery onSubmit={handleDeliverySubmit} />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title span="method" title="payment" />
          <div className="flex flex-col gap-3 lg:flex-row">
            <PaymentMethodButton
              currentMethod={method}
              logoSrc={assets.stripe_logo}
              method="stripe"
              onClick={setMethod}
            />
            <PaymentMethodButton
              currentMethod={method}
              logoSrc={assets.razorpay_logo}
              method="razorpay"
              onClick={setMethod}
            />
            <PaymentMethodButton
              currentMethod={method}
              label="cash on delivery"
              method="cod"
              onClick={setMethod}
            />
          </div>
          <div className="mt-8 w-full text-end">
            <LinkButton href="/orders" label="place order" />
          </div>
        </div>
      </div>
    </div>
  );
}
