import type { FeatureCardType } from '@/types';

export function FeatureCard({ title, description }: FeatureCardType) {
  return (
    <div className="flex flex-col gap-5 rounded-sm border px-10 py-8 sm:py-20 md:px-16">
      <p className="h-6 font-bold">{title}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
