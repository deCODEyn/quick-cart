import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginButton, LoginForm } from '@/components';
import { initialAuthFormData } from '@/constants';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';
import { type AuthFormType, authFormSchema } from '@/schemas';

export function AdminLogin() {
  const navigate = useNavigate();
  const { authLogin, isLoading, fetchUser } = useAuthContext();
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
    const { email, password } = data;
    const { success, message } = await authLogin(email, password);
    if (success) {
      await fetchUser();
      showSuccessToast(message || '');
      navigate('/admin', { state: { fromLogin: true } });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-gray-300 shadow-xl">
        <h1 className="mb-4 text-center font-bold text-2xl">
          Administrative Panel
        </h1>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 flex min-w-72 flex-col gap-2.5">
            <LoginForm errors={errors} register={register} />
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
