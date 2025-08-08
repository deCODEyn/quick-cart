import { FilterSection, ProductsGrid, SortSelect, Title } from '@/components';
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
        <div className="mb-4 flex items-center justify-between text-base md:text-2xl">
          <Title span="collections" title="all" />
          <SortSelect
            currentSortType={currentSortType}
            onSortChange={handleSortChange}
          />
        </div>
        <ProductsGrid products={filteredAndSortedProducts} />
      </div>
    </div>
  );
}
