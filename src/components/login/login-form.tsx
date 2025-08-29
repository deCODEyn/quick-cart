import { Input, PasswordInputs } from '@/components';
import type { LoginFormInterface } from '@/types';

const inputClass =
  'w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1';

export function LoginForm({
  isLogin = true,
  register,
  errors,
}: LoginFormInterface) {
  return (
    <>
      {!isLogin && (
        <div className="w-full">
          <Input
            className={inputClass}
            placeholder="Username"
            {...register('name')}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm" id="name-error">
              {errors.name.message}
            </p>
          )}
        </div>
      )}
      <div className="w-full">
        <Input
          className={inputClass}
          placeholder={'Email'}
          {...register('email')}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm" id="email-error">
            {errors.email.message}
          </p>
        )}
      </div>
      <PasswordInputs
        className={inputClass}
        errors={errors}
        needConfirm={!isLogin}
        register={register}
      />
    </>
  );
}
