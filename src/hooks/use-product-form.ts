import { useCallback, useState } from 'react';
import type {
  ImageFiles,
  ProductData,
  UseProductFormReturn,
} from '@/admin/admin-types';
import { initialImages, initialProductData } from '@/constants';
import { useApiRequest, usePrivateRequest, useToast } from '@/hooks';
import type { ProductType, SingleProductResponse } from '@/types';

export function useProductForm(): UseProductFormReturn {
  const { showSuccessToast } = useToast();
  const privateRequest = usePrivateRequest();
  const { execute, isLoading, requestError } = useApiRequest();
  const [images, setImages] = useState<ImageFiles>(initialImages);
  const [productData, setProductData] =
    useState<ProductData>(initialProductData);

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setProductData((prev) => ({
        ...prev,
        [name]: name === 'price' ? Number(value) : value,
      }));
    },
    []
  );

  const handleBestsellerChange = useCallback(() => {
    setProductData((prev) => ({
      ...prev,
      bestseller: !prev.bestseller,
    }));
  }, []);

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
    (data: ProductData, imagesFile: ImageFiles): FormData => {
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
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = buildFormData(productData, images);
      await execute<ProductType>(
        () =>
          privateRequest.post<SingleProductResponse>('/products', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          }),
        (_newProduct, message) => {
          showSuccessToast(message);
          setImages(initialImages);
          setProductData(initialProductData);
        }
      );
    },
    [
      execute,
      buildFormData,
      images,
      privateRequest,
      productData,
      showSuccessToast,
    ]
  );

  return {
    images,
    productData,
    isLoading,
    requestError,
    handleInputChange,
    handleBestsellerChange,
    handleImageChange,
    handleSizeToggle,
    onSubmit,
  };
}
