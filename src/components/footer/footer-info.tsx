import { Image } from '@/components';
import { assets } from '@/utils/assets';

export function FooterInfo() {
  return (
    <div>
      <Image alt="Company logo" className="mb-5 w-32" src={assets.logo} />
      <p className="w-full text-gray-600 md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        cumque, inventore obcaecati quasi eos perspiciatis. Delectus aut
        necessitatibus veniam obcaecati, id repellendus quis nesciunt neque,
        omnis quos quaerat accusamus nulla.
      </p>
    </div>
  );
}
