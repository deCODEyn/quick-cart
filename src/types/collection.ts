import type { ProductType } from "@/types";

export interface FilterGroupInterface {
  onToggle: (valeu: string) => void;
  options: string[];
  selectedOptions: string[];
  title: string;
}

export interface FilterSectionInterface {
  onCategoryToggle: (value: string) => void;
  onSubCategoryToggle: (value: string) => void;
  selectedCategories: string[];
  selectedSubCategories: string[];
}

export interface SortSelectInterface {
  onSortChange: (sortType: string) => void;
  currentSortType: string;
}

export interface UseProductFilterReturn {
  handleCategoryToggle: (value: string) => void;
  handleSortChange: (value: string) => void;
  handleSubCategoryToggle: (value: string) => void;
  currentSortType: string;
  filteredAndSortedProducts: ProductType[];
  selectedCategories: string[];
  selectedSubCategories: string[];
}