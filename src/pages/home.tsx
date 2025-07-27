import { Hero, NewsletterBox, OurPolicy, SectionHome } from '@/components';

export function Home() {
  return (
    <div>
      <Hero />
      <SectionHome isBestSeller={false} span="COLLECTIONS" title="LATEST">
        <p className="m-auto mb-5 w-3/4 text-gray-600 text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          cumque error porro quae minus autem cupiditate repellat fuga ex
          quisquam distinctio.
        </p>
      </SectionHome>
      <SectionHome isBestSeller={true} span="SELLERS" title="BEST">
        <p className="m-auto mb-5 w-3/4 text-gray-600 text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          cumque error porro quae minus autem cupiditate repellat fuga ex
          quisquam distinctio.
        </p>
      </SectionHome>
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}
