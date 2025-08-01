import { Image, NewsletterBox, Title } from '@/components';
import { assets } from '@/utils/assets';

export function About() {
  return (
    <div>
      <div className="border-t pt-8 text-center text-3xl">
        <Title span="us" title="about" />
      </div>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <Image
          alt="Generic image for About Us session"
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            non hic unde? Ad quis, quas at nemo voluptatum maxime excepturi
            autem quam quo? Dicta nesciunt fugiat vel at ipsam. Voluptates!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            earum sapiente aut blanditiis quaerat velit culpa dicta fugiat
            pariatur nostrum in iure, et nihil. Cum commodi natus ab quam quas!
          </p>
          <p className="font-bold text-gray-800">Our Mission</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit odio explicabo, sunt, saepe similique doloribus
            temporibus aliquam, inventore nihil optio laborum unde atque minima
            rerum illo? Tempore fugit numquam veritatis!
          </p>
        </div>
      </div>
      <div className="py-4 text-2xl">
        <Title span="choose us" title="why" />
      </div>
      <div className="mb-20 flex flex-col gap-1 text-sm md:flex-row">
        <div className="flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16">
          <p className="h-6 font-bold">Quality Assurance:</p>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse
            ex architecto ipsa doloremque quaerat sed. Earum!
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16">
          <p className="h-6 font-bold">Convenience:</p>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            dolorem possimus architecto recusandae unde.
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16">
          <p className="h-6 font-bold">Exceptionl Customer Service:</p>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            asperiores! Pariatur quo aperiam ipsum suscipit omnis quisquam.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}
