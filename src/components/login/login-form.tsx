import { Input } from '@/components';
import type { LoginFormInterface } from '@/types';

export function LoginForm({
  isLogin = true,
  formData,
  handleChange,
}: LoginFormInterface) {
  const inputClass =
    'w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1';

  return (
    <>
      {!isLogin && (
        <Input
          className={inputClass}
          name="name"
          onChange={handleChange}
          placeholder="Enter a username"
          required
          type="text"
          value={formData.name}
        />
      )}

      <Input
        className={inputClass}
        name="email"
        onChange={handleChange}
        placeholder={'Your e-mail'}
        required
        type="email"
        value={formData.email}
      />
      <Input
        className={inputClass}
        name="password"
        onChange={handleChange}
        placeholder={'Enter a password'}
        required
        type="password"
        value={formData.password}
      />
      {!isLogin && (
        <Input
          className={inputClass}
          name="passwordValidate"
          onChange={handleChange}
          placeholder={'Confirm Password'}
          required
          type="password"
          value={formData.passwordValidate}
        />
      )}
    </>
  );
}
