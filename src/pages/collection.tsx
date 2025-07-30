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

  const allCategories = ['Men', 'Women', 'Kids'];
  const allSubCategories = ['Topwear', 'Bottomwear', 'Winterwear'];

  return (
    <div className="flex flex-col gap-1 border-t pt-10 sm:gap-10 md:flex-row">
      <FilterSection
        categoryOptions={allCategories}
        onCategoryToggle={handleCategoryToggle}
        onSubCategoryToggle={handleSubCategoryToggle}
        selectedCategories={selectedCategories}
        selectedSubCategories={selectedSubCategories}
        subCategoryOptions={allSubCategories}
      />
      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between text-base md:text-2xl">
          <Title span="COLLECTIONS" title="ALL" />
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
