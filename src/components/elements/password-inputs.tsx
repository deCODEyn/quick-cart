import { Input } from '@/components';
import type { PasswordInputsInterface } from '@/types';

export function PasswordInputs({
  needConfirm = false,
  formData,
  handleChange,
  className,
}: PasswordInputsInterface) {
  return (
    <>
      <Input
        className={className}
        name="password"
        onChange={handleChange}
        placeholder="Enter a password"
        required
        type="password"
        value={formData.password}
      />
      {needConfirm && (
        <Input
          className={className}
          name="passwordValidate"
          onChange={handleChange}
          placeholder="Confirm password"
          required
          type="password"
          value={formData.passwordValidate}
        />
      )}
    </>
  );
}
