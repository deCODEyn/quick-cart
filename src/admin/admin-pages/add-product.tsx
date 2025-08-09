/** biome-ignore-all lint/suspicious/noConsole: <dev> */
import axios from 'axios';
import { ImageUp } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Button, Image, Input, Textarea } from '@/components';
import { useToast } from '@/hooks';
import type { ImageFiles, ProductData } from '@/types';
import { allCategories, allSubCategories, sizes } from '@/utils/constants';
import { env } from '@/utils/env';

export function AddProducts() {
  const { showSuccessToast, showErrorToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageFiles>({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });
  const [productData, setProductData] = useState<ProductData>({
    name: '',
    description: '',
    price: '',
    category: 'Men',
    subCategory: 'Topwear',
    bestseller: false,
    sizes: [],
  });

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setProductData((prev) => ({
        ...prev,
        [name]: value,
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

  const buildFormData = (
    data: ProductData,
    imagesFile: ImageFiles
  ): FormData => {
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
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = buildFormData(productData, images);
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${env.VITE_BACKEND_URL}/api/products`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        showSuccessToast(response.data.message);
        setImages({ image1: null, image2: null, image3: null, image4: null });
        setProductData({
          name: '',
          description: '',
          price: '',
          category: 'Men',
          subCategory: 'Topwear',
          bestseller: false,
          sizes: [],
        });
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
  };

  return (
    <form
      className="flex w-full flex-col items-start gap-3"
      onSubmit={onSubmit}
    >
      <div>
        <h3 className="mb-2 text-lg">Upload Images</h3>
        <div className="flex gap-5">
          {Object.keys(images).map((imageKey) => {
            const file = images[imageKey as keyof ImageFiles];
            const key = imageKey as keyof ImageFiles;
            return (
              <label htmlFor={key} key={key}>
                {file ? (
                  <Image
                    alt={`${key} preview!`}
                    className="size-20 cursor-pointer"
                    src={URL.createObjectURL(file)}
                  />
                ) : (
                  <ImageUp className="size-20 cursor-pointer" />
                )}
                <Input
                  hidden
                  id={key}
                  onChange={(e) => handleImageChange(e, key)}
                  required={key === 'image1'}
                  type="file"
                />
              </label>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <h3 className="mb-2 text-lg">Product Name</h3>
        <Input
          className="w-full max-w-[500px] rounded-sm border border-gray-400 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
          name="name"
          onChange={handleInputChange}
          placeholder="Type here"
          required
          type="text"
          value={productData.name}
        />
      </div>
      <div className="w-full">
        <h3 className="mb-2 text-lg">Product description</h3>
        <Textarea
          className="w-full max-w-[500px] rounded-sm border border-gray-400 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
          name="description"
          onChange={handleInputChange}
          placeholder="Write the content here"
          required
          value={productData.description}
        />
      </div>
      <div className="flex w-full flex-col gap-2 sm:flex-row md:gap-8">
        <div>
          <h3 className="mb-2 text-lg">Product category</h3>
          <select
            className="w-full rounded-sm border border-gray-400 px-3 py-2"
            name="category"
            onChange={handleInputChange}
            value={productData.category}
          >
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="mb-2 text-lg">Product subcategory</h3>
          <select
            className="w-full rounded-sm border border-gray-400 px-3 py-2"
            name="subCategory"
            onChange={handleInputChange}
            value={productData.subCategory}
          >
            {allSubCategories.map((subCat) => (
              <option key={subCat} value={subCat}>
                {subCat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="mb-2 text-lg">Product Price</h3>
          <Input
            className="h-10 w-full rounded-sm border border-gray-400 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1 sm:max-w-[130px]"
            name="price"
            onChange={handleInputChange}
            placeholder="Price"
            type="number"
            value={productData.price}
          />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg">Product Sizes</h3>
        <div className="flex">
          {sizes.map((size) => (
            <Button
              className={`mx-1 h-10 max-w-10 cursor-pointer border-2 px-4 py-2 text-gray-700 ${productData.sizes.includes(size) ? 'border-orange-400 bg-orange-100 hover:bg-orange-300' : 'border-gray-400 bg-gray-100 hover:bg-gray-300'}`}
              key={size}
              onClick={() => handleSizeToggle(size)}
              type="button"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        <Input
          checked={productData.bestseller}
          className="h-6 w-3.5"
          id="bestseller"
          onChange={handleBestsellerChange}
          type="checkbox"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <Button
        className="mt-4 h-10 w-36 cursor-pointer bg-black py-3 text-white uppercase active:bg-gray-400"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Adding...' : 'Add Product'}
      </Button>
    </form>
  );
}
