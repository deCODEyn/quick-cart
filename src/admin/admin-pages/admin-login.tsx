import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@/components';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';

export function AdminLogin() {
  const { authLogin, userRole } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { showWarningToast, showSuccessToast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginSuccess = await authLogin(email, password);
    if (loginSuccess) {
      if (userRole === 'Admin') {
        showSuccessToast('Login successful.');
        navigate('/admin');
      } else {
        showWarningToast(
          'Access denied. User without administrator permission.',
          { autoClose: 3000 }
        );
        navigate('/');
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-md">
        <h1 className="mb-4 font-bold text-2xl">Administrative Panel</h1>
        <form onSubmit={onSubmit}>
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
