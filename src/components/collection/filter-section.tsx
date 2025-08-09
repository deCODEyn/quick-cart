import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button, FilterGroup } from '@/components';
import { allCategories, allSubCategories } from '@/constants';
import type { FilterSectionInterface } from '@/types';

export function FilterSection({
  onCategoryToggle,
  onSubCategoryToggle,
  selectedCategories,
  selectedSubCategories,
}: FilterSectionInterface) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-w-60">
      <Button
        className="m-0 my-2 flex cursor-pointer appearance-none items-center gap-2 border-none bg-transparent p-0 text-current text-xl shadow-none hover:bg-transparent focus:outline-none focus-visible:ring-0 md:cursor-default"
        onClick={() => setShowFilter(!showFilter)}
        type="button"
      >
        FILTERS
        {showFilter ? (
          <ChevronUp className="h-4 md:hidden" />
        ) : (
          <ChevronDown className="h-4 md:hidden" />
        )}
      </Button>
      <div
        className={`mt-6 rounded-xl border border-gray-300 py-3 pl-5 ${showFilter ? '' : 'hidden'} md:block`}
      >
        <FilterGroup
          onToggle={onCategoryToggle}
          options={allCategories}
          selectedOptions={selectedCategories}
          title="category"
        />
      </div>
      <div
        className={`mt-6 rounded-xl border border-gray-300 py-3 pl-5 ${showFilter ? '' : 'hidden'} md:block`}
      >
        <FilterGroup
          onToggle={onSubCategoryToggle}
          options={allSubCategories}
          selectedOptions={selectedSubCategories}
          title="subcategory"
        />
      </div>
    </div>
  );
}
