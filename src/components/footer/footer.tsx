import { Company, Copyright, FooterInfo, GetInTouch } from '@/components';

export function Footer() {
  return (
    <div>
      <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm md:grid">
        <FooterInfo />
        <Company />
        <GetInTouch />
      </div>
      <Copyright />
    </div>
  );
}
