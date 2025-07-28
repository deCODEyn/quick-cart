export interface FilterGroupInterface {
  onToggle: (valeu: string) => void;
  options: string[];
  selectedOptions: string[];
  title: string;
}

export interface FilterSectionInterface {
  onCategoryToggle: (value: string) => void;
  onSubCategoryToggle: (value: string) => void;
  categoryOptions: string[];
  selectedCategories: string[];
  selectedSubCategories: string[];
  subCategoryOptions: string[];
}

export interface SortSelectInterface {
  onSortChange: (sortType: string) => void;
  currentSortType: string;
}
