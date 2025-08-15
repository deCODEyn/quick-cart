import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthButtonSelect, LoginButton, LoginForm } from '@/components';
import { useAuthForm } from '@/hooks';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { formData, handleChange, onSubmit, isLoading } = useAuthForm({
    isLogin,
    onSuccess: () => navigate('/'),
  });

  return (
    <form
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-3 text-gray-800 sm:max-w-96"
      onSubmit={onSubmit}
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="prata-regular text-3xl">
          {isLogin ? 'Login' : 'Sign Up'}
        </p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        isLogin={isLogin}
      />
      <AuthButtonSelect
        isLogin={isLogin}
        onToggleForm={() => setIsLogin(!isLogin)}
      />
      <LoginButton
        className="mt-2 h-10 w-30 rounded-md bg-black px-8 py-2 font-light text-white uppercase hover:bg-gray-600"
        isLoading={isLoading}
        isLogin={isLogin}
      />
    </form>
  );
}
