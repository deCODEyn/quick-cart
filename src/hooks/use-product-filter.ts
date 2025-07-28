import { useCallback, useContext, useEffect, useState } from 'react';
import { ShopContext } from '@/context/ShopContext';
import type { ProductType } from '@/types';

export function useProductFilter() {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>('relevant');

  const toggleFilter = useCallback(
    (
      currentFilters: string[],
      setFilters: React.Dispatch<React.SetStateAction<string[]>>
    ) =>
      (value: string) => {
        if (currentFilters.includes(value)) {
          setFilters((prev) => prev.filter((item) => item !== value));
        } else {
          setFilters((prev) => [...prev, value]);
        }
      },
    []
  );

  const handleCategoryToggle = toggleFilter(category, setCategory);
  const handleSubCategoryToggle = toggleFilter(subCategory, setSubCategory);
  const handleSortChange = (value: string) => setSortType(value);

  useEffect(() => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    switch (sortType) {
      case 'low-high':
        setFilterProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  }, [products, category, subCategory, sortType]);

  return {
    filteredAndSortedProducts: filterProducts,
    selectedCategories: category,
    selectedSubCategories: subCategory,
    currentSortType: sortType,
    handleCategoryToggle,
    handleSubCategoryToggle,
    handleSortChange,
  };
}
