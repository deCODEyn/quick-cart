import { Image, NewsletterBox, Title } from '@/components';
import { assets } from '@/utils/assets';

export function Contact() {
  return (
    <div>
      <div className="border-t pt-10 text-center text-2xl">
        <Title span="us" title="contact" />
      </div>
      <div className="my-10 mb-28 flex flex-col justify-center gap-10 md:flex-row">
        <Image
          alt="Generic image for Contact Us session"
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="font-semibold text-gray-600 text-xl">Our Store</p>
          <p className="text-gray-500">
            Business Address, 999 <br /> City, State <br />
            Country
          </p>
          <p className="text-gray-500">
            Phone: +12 (123) 456-7890 <br /> Email: admin@quickcart.com
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}
