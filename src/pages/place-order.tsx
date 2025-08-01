import { useState } from 'react';
import { CartTotal, Image, LinkButton, Title } from '@/components';
import { assets } from '@/utils/assets';

export function PlaceOrder() {
  const [method, setMethod] = useState('cod');

  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title span="information" title="delivery" />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            placeholder="First name"
            type="text"
          />
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            placeholder="Last name"
            type="text"
          />
        </div>
        <input
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          placeholder="E-mail address"
          type="email"
        />
        <input
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          placeholder="Street"
          type="text"
        />
        <div className="flex gap-3">
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            placeholder="City"
            type="text"
          />
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            placeholder="State"
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            placeholder="Zip code"
            type="text"
          />
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            placeholder="Country"
            type="text"
          />
        </div>
        <input
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          placeholder="Phone"
          type="number"
        />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title span="method" title="payment" />
          <div className="flex flex-col gap-3 lg:flex-row">
            <button
              className="flex cursor-pointer appearance-none items-center gap-3 border border-gray-300 bg-transparent p-2 px-3 focus:outline-none focus-visible:ring-2"
              onClick={() => setMethod('stripe')}
              type="button"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === 'stripe' ? 'bg-green-400' : ''}`}
              />
              <Image
                alt="Stripe logo"
                className="mx-4 h-5"
                src={assets.stripe_logo}
              />
            </button>
            <button
              className="flex cursor-pointer appearance-none items-center gap-3 border border-gray-300 bg-transparent p-2 px-3 focus:outline-none focus-visible:ring-2"
              onClick={() => setMethod('razorpay')}
              type="button"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === 'razorpay' ? 'bg-green-400' : ''}`}
              />
              <Image
                alt="Stripe logo"
                className="mx-4 h-5"
                src={assets.razorpay_logo}
              />
            </button>
            <button
              className="flex cursor-pointer appearance-none items-center gap-3 border border-gray-300 bg-transparent p-2 px-3 focus:outline-none focus-visible:ring-2"
              onClick={() => setMethod('cod')}
              type="button"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === 'cod' ? 'bg-green-400' : ''}`}
              />
              <p className="mx-4 font-medium text-gray-500 text-sm">
                CASH ON DELIVERY
              </p>
            </button>
          </div>
          <div className="mt-8 w-full text-end">
            <LinkButton href="/orders" label="place order" />
          </div>
        </div>
      </div>
    </div>
  );
}
