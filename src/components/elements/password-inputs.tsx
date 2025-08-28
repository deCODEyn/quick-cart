import { Input, Label } from '@/components';
import type { PasswordInputsType } from '@/types';

export function PasswordInputs({
  needConfirm = false,
  className,
  register,
  errors,
}: PasswordInputsType) {
  return (
    <>
      <div className="w-full">
        <Label htmlFor="password">Password</Label>
        <Input
          className={className}
          id="password"
          placeholder="New Password"
          type="password"
          {...register('password')}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      {needConfirm && (
        <div className="w-full">
          <Label htmlFor="passwordValidate">Confirm Password</Label>
          <Input
            className={className}
            id="passwordValidate"
            placeholder="Confirm Password"
            type="password"
            {...register('passwordValidate')}
            aria-invalid={!!errors.passwordValidate}
          />
          {errors.passwordValidate && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.passwordValidate.message}
            </p>
          )}
        </div>
      )}
    </>
  );
}
