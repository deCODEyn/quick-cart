import { FilterSection, ProductsGrid, SelectInput, Title } from '@/components';
import { sortOptions } from '@/constants';
import { useProductFilter } from '@/hooks';

export function Collection() {
  const {
    filteredAndSortedProducts,
    selectedCategories,
    selectedSubCategories,
    currentSortType,
    handleCategoryToggle,
    handleSubCategoryToggle,
    handleSortChange,
  } = useProductFilter();

  return (
    <div className="flex flex-col gap-1 border-t pt-10 sm:gap-10 md:flex-row">
      <FilterSection
        onCategoryToggle={handleCategoryToggle}
        onSubCategoryToggle={handleSubCategoryToggle}
        selectedCategories={selectedCategories}
        selectedSubCategories={selectedSubCategories}
      />
      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between ">
          <h1 className="mx-2 text-xl md:text-2xl">
            <Title as="h1" span="collections" title="all" />
          </h1>
          <SelectInput
            label="Sort by"
            onChange={handleSortChange}
            options={sortOptions}
            value={currentSortType}
          />
        </div>
        <ProductsGrid products={filteredAndSortedProducts} />
      </div>
    </div>
  );
}
