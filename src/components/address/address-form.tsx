import { useNavigate } from 'react-router-dom';
import { Button, Input, Label, LinkButton, SelectInput } from '@/components';
import { addressTypes } from '@/constants';
import { useAddressForm, useToast } from '@/hooks';
import type { AddressFormType } from '@/types';

export function AddressForm({
  initialData,
  isEditMode = false,
}: AddressFormType) {
  const { addressData, isLoading, handleInputChange, onSubmit } =
    useAddressForm(initialData, isEditMode);
  const navigate = useNavigate();
  const { showSuccessToast } = useToast();

  const handleSelectChange = (name: string, value: string) => {
    handleInputChange({
      target: {
        name,
        value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await onSubmit(e);
    if (result.success) {
      showSuccessToast(result.message);
    }
    navigate('/profile');
  };

  return (
    <form
      className="flex w-full flex-col items-start gap-5"
      onSubmit={handleSubmit}
    >
      <div className="m-auto flex flex-col items-center gap-2 p-3 md:p-10">
        <div className="mb-2 w-full max-w-[150px] self-start">
          <SelectInput
            className="mb-2"
            label="Address Type"
            onChange={(value: string) => handleSelectChange('type', value)}
            options={addressTypes}
            value={addressData.type}
          />
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Street</Label>
          <Input
            className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            name="street"
            onChange={handleInputChange}
            placeholder="Street"
            required
            type="text"
            value={addressData.street}
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <div className="w-full">
            <Label className="mb-2 text-lg">House Number</Label>
            <Input
              className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              name="houseNumber"
              onChange={handleInputChange}
              placeholder="House Number"
              required
              type="number"
              value={addressData.houseNumber}
            />
          </div>
          <div className="w-full">
            <Label className="mb-2 text-lg">Zip Code</Label>
            <Input
              className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              name="zipCode"
              onChange={handleInputChange}
              placeholder="Zip Code"
              required
              type="text"
              value={addressData.zipCode}
            />
          </div>
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">City</Label>
          <Input
            className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            disabled={isEditMode}
            name="city"
            onChange={handleInputChange}
            placeholder="City"
            required
            type="text"
            value={addressData.city}
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <div className="w-full">
            <Label className="mb-2 text-lg">State</Label>
            <Input
              className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              name="state"
              onChange={handleInputChange}
              placeholder="State"
              required
              type="text"
              value={addressData.state}
            />
          </div>
          <div className="w-full">
            <Label className="mb-2 text-lg">Country</Label>
            <Input
              className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
              disabled={isEditMode}
              name="country"
              onChange={handleInputChange}
              placeholder="Country"
              required
              type="text"
              value={addressData.country}
            />
          </div>
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Neighborhood</Label>
          <Input
            className="w-full max-w-[500px] rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            name="neighborhood"
            onChange={handleInputChange}
            placeholder="Neighborhood"
            type="text"
            value={addressData.neighborhood || ''}
          />
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Complement</Label>
          <Input
            className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            name="complement"
            onChange={handleInputChange}
            placeholder="Complement"
            type="text"
            value={addressData.complement || ''}
          />
        </div>
        <div className="w-full">
          <Label className="mb-2 text-lg">Reference Point</Label>
          <Input
            className="w-full rounded-sm border border-gray-500 px-3 py-2 ring-0 focus-visible:border-gray-800 focus-visible:ring-1"
            name="reference"
            onChange={handleInputChange}
            placeholder="e.g. Near the main square"
            value={addressData.reference || ''}
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
