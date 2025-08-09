import { assets } from '@/assets';
import { Image } from '@/components';

export function FooterInfo() {
  return (
    <div>
      <Image alt="Company logo" className="mb-2 w-32" src={assets.logo} />
      <p className="w-full text-gray-600 text-xs md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        cumque, inventore obcaecati quasi eos perspiciatis.
      </p>
    </div>
  );
}
