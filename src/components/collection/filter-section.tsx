import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { FilterGroup } from '@/components';
import type { FilterSectionInterface } from '@/types';

export function FilterSection({
  categoryOptions,
  onCategoryToggle,
  onSubCategoryToggle,
  selectedCategories,
  selectedSubCategories,
  subCategoryOptions,
}: FilterSectionInterface) {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="min-w-60">
      <button
        className="m-0 my-2 flex cursor-pointer appearance-none items-center gap-2 border-none bg-transparent p-0 text-current text-xl focus:outline-none focus-visible:ring-2 md:cursor-default"
        onClick={() => setShowFilter(!showFilter)}
        type="button"
      >
        FILTERS
        {showFilter ? (
          <ChevronUp className="h-4 md:hidden" />
        ) : (
          <ChevronDown className="h-4 md:hidden" />
        )}
      </button>
      <div
        className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? '' : 'hidden'} md:block`}
      >
        <FilterGroup
          onToggle={onCategoryToggle}
          options={categoryOptions}
          selectedOptions={selectedCategories}
          title="CATEGORIES"
        />
      </div>
      <div
        className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? '' : 'hidden'} md:block`}
      >
        <FilterGroup
          onToggle={onSubCategoryToggle}
          options={subCategoryOptions}
          selectedOptions={selectedSubCategories}
          title="TYPE"
        />
      </div>
    </div>
  );
}
