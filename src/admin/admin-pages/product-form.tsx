import { useNavigate } from 'react-router-dom';
import { ImageUploader, SizesSelector } from '@/admin/admin-components';
import type { ProductFormType } from '@/admin/admin-types';
import { Button, Input, Label, SelectInput, Textarea } from '@/components';
import { allCategories, allSubCategories } from '@/constants';
import { useProductForm } from '@/hooks';

export function ProductForm({
  initialData,
  isEditMode = false,
}: ProductFormType) {
  const {
    images,
    productData,
    isLoading,
    handleInputChange,
    handleBestsellerChange,
    handleImageChange,
    handleSizeToggle,
    onSubmit,
  } = useProductForm(initialData, isEditMode);
  const navigate = useNavigate();

  const handleSelectChange = (name: string, value: string) => {
    handleInputChange({
      target: {
        name,
        value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <form
      className="flex w-full flex-col items-start gap-3"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e, navigate)}
    >
      {!isEditMode && (
        <>
          <h1 className="mb-4 font-bold text-2xl">Add new product</h1>
          <ImageUploader
            handleImageChange={handleImageChange}
            images={images}
          />
        </>
      )}
      <div className="w-full">
        <Label className="mb-2 text-lg">Product Name</Label>
        <Input
          className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
          disabled={isEditMode}
          name="name"
          onChange={handleInputChange}
          placeholder="Type here"
          required
          type="text"
          value={productData.name}
        />
      </div>
      <div className="w-full">
        <Label className="mb-2 text-lg">Product description</Label>
        <Textarea
          className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
          name="description"
          onChange={handleInputChange}
          placeholder="Write the content here"
          required
          value={productData.description}
        />
      </div>
      <div className="flex w-full flex-col gap-2 sm:flex-row md:gap-8">
        <SelectInput
          className="mb-2"
          label="Product category"
          onChange={(value: string) => handleSelectChange('category', value)}
          options={allCategories}
          value={productData.category}
        />
        <SelectInput
          className="mb-2"
          label="Product subcategory"
          onChange={(value: string) => handleSelectChange('subCategory', value)}
          options={allSubCategories}
          value={productData.subCategory}
        />
        <div>
          <Label className="mb-2 text-lg">Product Price</Label>
          <Input
            className="h-10 w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1 sm:max-w-[130px]"
            name="price"
            onChange={handleInputChange}
            placeholder="Price"
            type="number"
            value={productData.price}
          />
        </div>
      </div>
      <SizesSelector
        handleSizeToggle={handleSizeToggle}
        selectedSizes={productData.sizes}
      />
      <div className="mt-2 flex gap-2">
        <Input
          checked={productData.bestseller}
          className="h-6 w-3.5"
          id="bestseller"
          onChange={handleBestsellerChange}
          type="checkbox"
        />
        <Label className="cursor-pointer text-md" htmlFor="bestseller">
          Add to bestseller
        </Label>
      </div>
      <Button
        className="mt-4 h-12 w-36 cursor-pointer rounded bg-black py-3 text-white uppercase hover:bg-gray-700 active:bg-gray-600"
        disabled={isLoading}
        type="submit"
      >
        {isLoading
          ? `${isEditMode ? 'Updating...' : 'Adding...'}`
          : `${isEditMode ? 'Update Product' : 'Add Product'}`}
      </Button>
    </form>
  );
}
