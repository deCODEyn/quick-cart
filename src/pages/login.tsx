import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthButtonSelect, LoginButton, LoginForm } from '@/components';
import { initialAuthFormData } from '@/constants';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';
import { type AuthFormType, authFormSchema } from '@/schemas';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const from = useLocation().state?.from || '/';
  const { authLogin, authRegister, isLoading, fetchUser } = useAuthContext();
  const { showSuccessToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormType>({
    resolver: zodResolver(authFormSchema),
    defaultValues: initialAuthFormData,
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<AuthFormType> = async (data) => {
    const { email, password, name } = data;
    const { success, message } = isLogin
      ? await authLogin(email, password)
      : await authRegister(email, password, name ?? '');
    if (success) {
      await fetchUser();
      showSuccessToast(message || '');
      navigate(from === '/login' ? '/' : from, { replace: true });
    }
  };

  return (
    <div className="border-t">
      <form
        className="m-auto mt-14 flex w-[90%] flex-col items-center gap-3 text-gray-800 sm:max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-10 mb-2 inline-flex items-center gap-2">
          <h1 className="prata-regular text-3xl">
            {isLogin ? 'Login' : 'Sign Up'}
          </h1>
          <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
        </div>
        <LoginForm errors={errors} isLogin={isLogin} register={register} />
        <AuthButtonSelect
          isLogin={isLogin}
          onToggleForm={() => setIsLogin(!isLogin)}
        />
        <LoginButton
          className="mt-2 h-10 w-30 cursor-pointer rounded-md bg-black px-8 py-2 font-light text-white uppercase hover:bg-gray-600"
          isLoading={isLoading}
          isLogin={isLogin}
        />
      </form>
    </div>
  );
}
