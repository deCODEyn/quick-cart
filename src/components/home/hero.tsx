import { assets } from '@/assets';
import { Image } from '@/components';

export function Hero() {
  return (
    <div className="flex flex-col rounded-md border border-gray-400 md:flex-row">
      <div className="flex w-full items-center justify-center py-10 md:w-1/2 md:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="h-[2px] w-8 bg-[#414141] md:w-11" />
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl leading-relaxed md:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="h-[1px] w-8 bg-[#414141] md:w-11" />
          </div>
        </div>
      </div>
      <Image
        alt="Home page banner image"
        className="w-full md:w-1/2"
        src={assets.hero_img}
      />
    </div>
  );
}
