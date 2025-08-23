import type { TitleType } from '@/types';

export function Title({ title, span, as: Component = 'h2' }: TitleType) {
  return (
    <div className="mb-4 inline-flex items-center gap-1 md:gap-2 lg:gap-4">
      <Component className="text-gray-500 uppercase">
        {title}
        <span className="font-medium text-gray-700 uppercase"> {span} </span>
      </Component>
      <p className="mr-4 h-[2px] w-8 bg-gray-800 md:w-12" />
    </div>
  );
}
