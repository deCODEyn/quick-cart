import { useState } from 'react';
import { Button, Input } from '@/components';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para login e/ou cadastro
    //Validar no backend o usuário e guardar token de autenticação.
    //Após isso, implementar Logout no usuário.
  };

  const inputClass =
    'w-full rounded border border-gray-800 px-3 py-2 focus-visible:ring-0';

  return (
    <form
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
      onSubmit={handleSubmit}
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="prata-regular text-3xl">
          {isLogin ? 'Login' : 'Sign Up'}
        </p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {!isLogin && (
        <Input className={inputClass} placeholder="Name" required type="text" />
      )}
      <Input
        className={inputClass}
        placeholder="E-mail"
        required
        type="email"
      />
      <Input
        className={inputClass}
        placeholder="Password"
        required
        type="password"
      />

      <div className="mt-[-8px] flex w-full justify-between text-sm">
        {isLogin && (
          <Button
            className="m-[-10px] cursor-pointer appearance-none"
            type="button"
          >
            Forgot your password?
          </Button>
        )}
        <Button
          className="m-[-10px] cursor-pointer appearance-none"
          onClick={() => setIsLogin(!isLogin)}
          type="button"
        >
          {isLogin ? 'Create Account' : 'Login Here'}
        </Button>
      </div>

      <Button
        className="mt-2 h-10 w-30 rounded bg-black px-8 py-2 font-light text-white uppercase hover:bg-gray-600"
        type="submit"
      >
        {isLogin ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  );
}
