import { Headset, RefreshCw, ShieldCheck } from 'lucide-react';

export function OurPolicy() {
  return (
    <div className="flex flex-col justify-around gap-12 py-25 text-center text-gray-700 text-xs sm:gap-2 sm:text-sm md:flex-row md:text-base">
      <div>
        <RefreshCw className=" m-auto mb-5 size-10" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <ShieldCheck className=" m-auto mb-5 size-10" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <Headset className=" m-auto mb-5 size-10" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/07 customer support</p>
      </div>
    </div>
  );
}
