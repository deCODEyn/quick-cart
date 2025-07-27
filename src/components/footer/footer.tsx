import { Image } from '@/components';
import { assets } from '@/utils/assets';

export function Footer() {
  return (
    <div>
      <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm md:grid">
        <div>
          <Image
            alt="Logomarca da empresa"
            className="mb-5 w-32"
            src={assets.logo}
          />
          <p className="w-full text-gray-600 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            cumque, inventore obcaecati quasi eos perspiciatis. Delectus aut
            necessitatibus veniam obcaecati, id repellendus quis nesciunt neque,
            omnis quos quaerat accusamus nulla.
          </p>
        </div>
        <div>
          <p className="mb-5 font-medium text-xl">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>rivacy policy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 font-medium text-xl">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+12-123-456-7890</li>
            <li>contact@quickcart.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="h-[1.5px] border-none bg-black" />
        <p className="py-5 text-center font-semibold text-black text-sm">
          Copyright 2025 © Decodeyn - All Right Reserved.
        </p>
      </div>
    </div>
  );
}
