import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Label, LinkButton, SelectInput } from '@/components';
import { addressTypes } from '@/constants';
import { useToast } from '@/hooks';
import type { AddressFormData } from '@/schemas';
import type { AddressFormInterface } from '@/types';

export function AddressForm({
  form,
  onSubmit,
  isEditMode = false,
  isLoading,
}: AddressFormInterface) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const navigate = useNavigate();
  const { showSuccessToast } = useToast();

  const handleFormSubmit = async (data: AddressFormData) => {
    const result = await onSubmit(data);
    if (result.success) {
      showSuccessToast(result.message);
    }
    navigate('/profile');
  };

  return (
    <form
      className="flex w-full flex-col items-start gap-5"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="m-auto flex flex-col items-center gap-2 p-3 md:p-10">
        <div className="mb-2 w-full max-w-[150px] self-start">
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <SelectInput
                label="Address Type"
                onChange={field.onChange}
                options={addressTypes}
                value={field.value}
              />
            )}
          />
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Street</Label>
          <Input
            className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            placeholder="Street"
            {...register('street')}
          />
          {errors.street && (
            <p className="text-red-500">{errors.street.message}</p>
          )}
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <div className="w-full">
            <Label className="mb-2 text-lg">House Number</Label>
            <Input
              className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              placeholder="House Number"
              {...register('houseNumber')}
            />
            {errors.houseNumber && (
              <p className="text-red-500">{errors.houseNumber.message}</p>
            )}
          </div>
          <div className="w-full">
            <Label className="mb-2 text-lg">Zip Code</Label>
            <Input
              className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              placeholder="Zip Code"
              {...register('zipCode')}
            />
            {errors.zipCode && (
              <p className="text-red-500">{errors.zipCode.message}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">City</Label>
          <Input
            className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            disabled={isEditMode}
            placeholder="City"
            {...register('city')}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <div className="w-full">
            <Label className="mb-2 text-lg">State</Label>
            <Input
              className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              placeholder="State"
              {...register('state')}
            />
            {errors.state && (
              <p className="text-red-500">{errors.state.message}</p>
            )}
          </div>
          <div className="w-full">
            <Label className="mb-2 text-lg">Country</Label>
            <Input
              className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              placeholder="Country"
              {...register('country')}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Neighborhood</Label>
          <Input
            className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            placeholder="Neighborhood"
            {...register('neighborhood')}
          />
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Complement</Label>
          <Input
            className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            placeholder="Complement"
            {...register('complement')}
          />
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Reference Point</Label>
          <Input
            className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            placeholder="e.g. Near the main square"
            {...register('reference')}
          />
        </div>
        <div className="mt-5 flex justify-end gap-4">
          <LinkButton
            className="h-10 cursor-pointer rounded border border-gray-400 bg-transparent px-10 py-4 text-gray-900 uppercase transition-colors hover:bg-gray-200"
            href="/profile"
            label="Cancel"
          />
          <Button
            className="h-10 cursor-pointer rounded bg-black px-10 py-4 text-sm text-white uppercase hover:bg-gray-700 active:bg-gray-500"
            disabled={isLoading}
            type="submit"
          >
            {isLoading
              ? `${isEditMode ? 'Updating...' : 'Adding...'}`
              : `${isEditMode ? 'Update Address' : 'Add Address'}`}
          </Button>
        </div>
      </div>
    </form>
  );
}
