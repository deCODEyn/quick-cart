import { useNavigate } from 'react-router-dom';
import { LoginButton, LoginForm } from '@/components';
import { useAuthForm } from '@/hooks';

export function AdminLogin() {
  const navigate = useNavigate();
  const { formData, handleChange, onSubmit, isLoading } = useAuthForm({
    onSuccess: () => navigate('/admin', { state: { fromLogin: true } }),
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-gray-300 shadow-xl">
        <h1 className="mb-4 text-center font-bold text-2xl">
          Administrative Panel
        </h1>
        <form className="mt-10" onSubmit={onSubmit}>
          <div className="mb-3 flex min-w-72 flex-col gap-2.5">
            <LoginForm formData={formData} handleChange={handleChange} />
          </div>
          <LoginButton
            className="mt-2 w-full rounded-md bg-black px-4 py-2 text-white"
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
}
