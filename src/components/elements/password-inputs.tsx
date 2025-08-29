import type { FieldError, FieldValues, Path } from 'react-hook-form';
import { Input } from '@/components';
import type { PasswordInputsType } from '@/types';

export function PasswordInputs<TFormValues extends FieldValues>({
  needConfirm = false,
  className,
  register,
  errors,
}: PasswordInputsType<TFormValues>) {
  const passwordFiel = 'password' as Path<TFormValues>;
  const passwordValidateField = 'passwordValidate' as Path<TFormValues>;
  const passwordError = errors.password as FieldError | undefined;
  const validateError = errors.passwordValidate as FieldError | undefined;

  return (
    <>
      <div className="w-full">
        <Input
          className={className}
          id="password"
          placeholder="Password"
          type="password"
          {...register(passwordFiel)}
          aria-describedby={errors.password ? 'password-error' : undefined}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p className="mt-1 text-red-500 text-sm" id="password-error">
            {passwordError?.message}
          </p>
        )}
      </div>
      {needConfirm && (
        <div className="w-full">
          <Input
            className={className}
            id="passwordValidate"
            placeholder="Confirm Password"
            type="password"
            {...register(passwordValidateField)}
            aria-describedby={
              errors.passwordValidate ? 'password-validate-error' : undefined
            }
            aria-invalid={!!errors.passwordValidate}
          />
          {errors.passwordValidate && (
            <p
              className="mt-1 text-red-500 text-sm"
              id="password-validate-error"
            >
              {validateError?.message}
            </p>
          )}
        </div>
      )}
    </>
  );
}
