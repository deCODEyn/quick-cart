import { useState } from 'react';
import { Button, InputForm } from '@/components';
import type { FormDeliveryData, FormDeliveryInterface } from '@/types';

export function FormDelivery({ onSubmit }: FormDeliveryInterface) {
  const [formData, setFormData] = useState<FormDeliveryData>({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    houseNumber: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //implement validation logic
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <InputForm
          name="firstName"
          onChange={handleChange}
          placeholder="First name"
          type="text"
          value={formData.firstName}
        />
        <InputForm
          name="lastName"
          onChange={handleChange}
          placeholder="Last name"
          type="text"
          value={formData.lastName}
        />
      </div>
      <InputForm
        name="email"
        onChange={handleChange}
        placeholder="E-mail address"
        type="email"
        value={formData.email}
      />
      <div className="grid grid-cols-[6fr_2fr] gap-3">
        <InputForm
          name="street"
          onChange={handleChange}
          placeholder="Street"
          type="text"
          value={formData.street}
        />
        <InputForm
          name="houseNumber"
          onChange={handleChange}
          placeholder="House nº"
          type="number"
          value={formData.houseNumber}
        />
      </div>
      <div className="flex gap-3">
        <InputForm
          name="city"
          onChange={handleChange}
          placeholder="City"
          type="text"
          value={formData.city}
        />
        <InputForm
          name="state"
          onChange={handleChange}
          placeholder="State"
          type="text"
          value={formData.state}
        />
      </div>
      <div className="flex gap-3">
        <InputForm
          name="zipCode"
          onChange={handleChange}
          placeholder="Zip code"
          type="text"
          value={formData.zipCode}
        />
        <InputForm
          name="country"
          onChange={handleChange}
          placeholder="Country"
          type="text"
          value={formData.country}
        />
      </div>
      <InputForm
        name="phone"
        onChange={handleChange}
        placeholder="Phone"
        type="tel"
        value={formData.phone}
      />
      <Button className="hidden" type="submit">
        Save address
      </Button>
    </form>
  );
}
