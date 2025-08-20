import { assets } from '@/assets';
import { ContactInfoCard, Image, NewsletterBox, Title } from '@/components';

export function Contact() {
  const address = ['Business Address, 999', 'City, State', 'Country'];

  return (
    <div>
      <h1 className="border-t pt-10 text-center text-2xl">
        <Title as="h1" span="us" title="contact" />
      </h1>
      <div className="my-10 mb-28 flex flex-col justify-center gap-10 md:flex-row">
        <Image
          alt="Generic image for Contact Us session"
          className="w-full rounded-sm md:max-w-[480px]"
          src={assets.contact_img}
        />
        <ContactInfoCard
          address={address}
          email="admin@quickcart.com"
          phone="+12 (123) 456-7890"
          title="Our Store"
        />
      </div>
      <NewsletterBox />
    </div>
  );
}
