import { Hero, NewsletterBox, OurPolicy, SectionHome } from '@/components';

export function Home() {
  return (
    <div className="pt-5">
      <Hero />
      <SectionHome isBestSeller={true} span="sellers" title="best">
        <p className="m-auto mb-5 w-3/4 text-gray-600 text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          cumque error porro quae minus autem cupiditate repellat fuga ex
          quisquam distinctio.
        </p>
      </SectionHome>
      <SectionHome isBestSeller={false} span="collections" title="latest">
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
