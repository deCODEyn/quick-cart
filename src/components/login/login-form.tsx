import { Input } from '@/components';
import type { LoginFormInterface } from '@/types';

export function LoginForm({
  isLogin,
  formData,
  handleChange,
}: LoginFormInterface) {
  return (
    <>
      {!isLogin && (
        <Input
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
          type="text"
          value={formData.name || ''}
        />
      )}

      <Input
        className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
        name="email"
        onChange={handleChange}
        placeholder={'Enter your e-mail'}
        required
        type="email"
        value={formData.email}
      />
      <Input
        className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
        name="password"
        onChange={handleChange}
        placeholder={'Enter your password'}
        required
        type="password"
        value={formData.password}
      />
    </>
  );
}
