import type { TitleType } from '@/types';

export function Title({ title, span }: TitleType) {
  return (
    <div className="pt-8 pb-4 text-center text-3xl">
      <div className="mb-3 inline-flex items-center gap-2">
        <p className="text-gray-500 uppercase">
          {title}
          <span className="font-medium text-gray-700 uppercase"> {span} </span>
        </p>
        <p className="h-[1px] w-8 bg-gray-700 md:h-[2px] md:w-12" />
      </div>
    </div>
  );
}
