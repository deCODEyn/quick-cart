import type { SortSelectInterface } from '@/types';

export function SortSelect({
  currentSortType = 'relevant',
  onSortChange,
}: SortSelectInterface) {
  return (
    <select
      className="ml-2 h-10 rounded-lg border-2 border-gray-300 px-2 text-sm"
      onChange={(e) => onSortChange(e.target.value)}
      value={currentSortType}
    >
      <option value="relevant">Sort by Relevant</option>
      <option value="low-high">Sort by Low to High</option>
      <option value="high-low">Sort by High to Low</option>
    </select>
  );
}
