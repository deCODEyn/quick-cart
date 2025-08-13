import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@/components';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';

export function AdminLogin() {
  const { authLogin, isLoading } = useAuthContext();
  const { showInfoToast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (await authLogin(formData.email, formData.password)) {
        navigate('/admin', { state: { fromLogin: true } });
      } else {
        showInfoToast('Login failed. Please try again.');
      }
    },
    [authLogin, navigate, formData, showInfoToast]
  );

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
              name="email"
              onChange={handleChange}
              placeholder="Enter your admin e-mail"
              required
              type="email"
              value={formData.email}
            />
            <p className="mb-2 font-medium text-gray-700 text-sm">Password</p>
            <Input
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus-visible:ring-1"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
              type="password"
              value={formData.password}
            />
          </div>
          <Button
            className="mt-2 w-full rounded-md bg-black px-4 py-2 text-white"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? 'Logging in' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
}
