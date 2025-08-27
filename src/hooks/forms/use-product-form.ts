import { useCallback, useState } from 'react';
import type {
  ImageFiles,
  ProductFormData,
  UseProductFormReturn,
} from '@/admin/admin-types';
import { initialImages, initialProductFormData } from '@/constants';
import { useProductData } from '@/hooks';
import type { ProductType } from '@/types';

export function useProductForm(
  initialData?: ProductType,
  isEditMode = false
): UseProductFormReturn {
  const startProductData = () => {
    if (isEditMode && initialData) {
      return {
        ...initialData,
        bestseller: !!initialData.bestseller,
      };
    }
    return initialProductFormData;
  };
  const { createProduct, updateProduct, isLoading } = useProductData();
  const [images, setImages] = useState<ImageFiles>(initialImages);
  const [productData, setProductData] =
    useState<ProductFormData>(startProductData);

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value, type } = e.target;
      const newValue =
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      setProductData((prev) => ({
        ...prev,
        [name]: name === 'price' ? Number(newValue) : newValue,
      }));
    },
    []
  );

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, imageKey: keyof ImageFiles) => {
      const file = e.target.files?.[0];
      if (file) {
        setImages((prev) => ({
          ...prev,
          [imageKey]: file,
        }));
      }
    },
    []
  );

  const handleSizeToggle = useCallback((size: string) => {
    setProductData((prev) => {
      const isSizeSelected = prev.sizes.includes(size);
      const newSizes = isSizeSelected
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size];
      return {
        ...prev,
        sizes: newSizes,
      };
    });
  }, []);

  const buildFormData = useCallback(
    (data: ProductFormData, imagesFile: ImageFiles): FormData => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('price', String(data.price));
      formData.append('category', data.category);
      formData.append('subCategory', data.subCategory);
      formData.append('bestseller', String(data.bestseller));
      for (const size of data.sizes) {
        formData.append('sizes', size);
      }
      for (const file of Object.values(imagesFile)) {
        if (file) {
          formData.append('images', file);
        }
      }
      return formData;
    },
    []
  );

  const onSubmit = useCallback(
    async (
      e: React.FormEvent<HTMLFormElement>
    ): Promise<{ success: boolean; message: string }> => {
      e.preventDefault();
      let success: boolean;
      let message: string | undefined;
      if (isEditMode && initialData?._id) {
        ({ success, message } = await updateProduct(initialData._id, {
          bestseller: productData.bestseller,
          category: productData.category,
          description: productData.description,
          price: productData.price,
          sizes: productData.sizes,
          subCategory: productData.subCategory,
        }));
      } else {
        const formData = buildFormData(productData, images);
        ({ success, message } = await createProduct(formData));
      }
      if (success) {
        setImages(initialImages);
        setProductData(initialProductFormData);
        return { success: true, message: message || 'Operation successful' };
      }
      return { success: false, message: 'Operation failed' };
    },
    [
      buildFormData,
      updateProduct,
      createProduct,
      images,
      productData,
      isEditMode,
      initialData,
    ]
  );

  return {
    images,
    productData,
    isLoading,
    handleInputChange,
    handleImageChange,
    handleSizeToggle,
    onSubmit,
  };
}
