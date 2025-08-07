import { useState } from 'react';
import { Button, Input } from '@/components';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-md">
        <h1 className="mb-4 font-bold text-2xl">Administrative Panel</h1>
        <form>
          <div className="mb-3 min-w-72">
            <p className="mb-2 font-medium text-gray-700 text-sm">
              Email Address
            </p>
            <Input
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your admin e-mail"
              required
              type="email"
              value={email}
            />
            <p className="mb-2 font-medium text-gray-700 text-sm">Password</p>
            <Input
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              type="password"
              value={password}
            />
          </div>
          <Button
            className="mt-2 w-full rounded-md bg-black px-4 py-2 text-white"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
