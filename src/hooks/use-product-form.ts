import axios from 'axios';
import { useCallback, useState } from 'react';
import type {
  ImageFiles,
  ProductData,
  UseProductFormReturn,
} from '@/admin/admin-types';
import { initialImages, initialProductData } from '@/constants';
import { usePrivateRequest, useToast } from '@/hooks';

export function useProductForm(): UseProductFormReturn {
  const { showSuccessToast, showErrorToast } = useToast();
  const privateRequest = usePrivateRequest();
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      try {
        const formData = buildFormData(productData, images);
        const response = await privateRequest.post('/products', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (response.data.success) {
          showSuccessToast(response.data.message);
          setImages(initialImages); // Reseta o estado
          setProductData(initialProductData); // Reseta o estado
        } else {
          showErrorToast(response.data.message);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const message = error.response.data.message;
          showErrorToast(message);
        } else {
          showErrorToast(
            'An unexpected server error occurred. Please try again later.'
          );
        }
      } finally {
        setIsLoading(false);
      }
    },
    [
      buildFormData,
      images,
      privateRequest,
      productData,
      showErrorToast,
      showSuccessToast,
    ]
  );

  return {
    images,
    productData,
    isLoading,
    handleInputChange,
    handleBestsellerChange,
    handleImageChange,
    handleSizeToggle,
    onSubmit,
  };
}
