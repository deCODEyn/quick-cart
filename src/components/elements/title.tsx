import type { TitleType } from '@/types';

export function Title({ title, span, as: Component = 'h2' }: TitleType) {
  return (
    <div className="mb-3 inline-flex items-center gap-2">
      <Component className="text-gray-500 uppercase">
        {title}
        <span className="font-medium text-gray-700 uppercase"> {span} </span>
      </Component>
      <p className="h-[1px] w-8 bg-gray-700 md:h-[2px] md:w-12" />
    </div>
  );
}
