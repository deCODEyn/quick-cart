import { assets } from '@/assets';
import { FeatureCard, Image, NewsletterBox, Title } from '@/components';

export function About() {
  return (
    <div>
      <h2 className="border-t pt-8 text-center text-3xl">
        <Title span="us" title="about" />
      </h2>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <Image
          alt="Generic image for About Us session"
          className="w-full rounded-sm md:max-w-[450px]"
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
          <h3 className="font-bold text-gray-800">Our Mission</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit odio explicabo, sunt, saepe similique doloribus
            temporibus aliquam, inventore nihil optio laborum unde atque minima
            rerum illo? Tempore fugit numquam veritatis!
          </p>
        </div>
      </div>
      <h3 className="py-4 text-2xl">
        <Title as="h3" span="choose us" title="why" />
      </h3>
      <div className="mb-20 flex flex-col gap-1 text-sm md:flex-row">
        <FeatureCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse
            ex architecto ipsa doloremque quaerat sed. Earum!"
          title="Quality Assurance:"
        />
        <FeatureCard
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            dolorem possimus architecto recusandae unde."
          title="Convenience:"
        />
        <FeatureCard
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            asperiores! Pariatur quo aperiam ipsum suscipit omnis quisquam."
          title="Exceptionl Customer Service:"
        />
      </div>
      <NewsletterBox />
    </div>
  );
}
