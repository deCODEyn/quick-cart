import { useState } from 'react';
import { Button, Input } from '@/components';

export function Login() {
  const [currentState, setCurrentState] = useState('Sign Up');
  const inputClass =
    'w-full rounded border border-gray-800 px-3 py-2 focus-visible:ring-0';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //lógica de login para usuário.
    //Validar no backend o usuário e guardar token de autenticação.
    //Após isso, implementar Logout no usuário.
  };

  return (
    <form
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
      onSubmit={handleSubmit}
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentState === 'Login' ? (
        ''
      ) : (
        <Input
          className={inputClass}
          placeholder="Username"
          required
          type="text"
        />
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
        <Button
          className="m-[-10px] cursor-pointer appearance-none"
          type="button"
        >
          Forgot your password?
        </Button>
        {currentState === 'Login' ? (
          <Button
            className="m-[-10px] cursor-pointer appearance-none"
            onClick={() => setCurrentState('Sign Up')}
            type="button"
          >
            Create Account
          </Button>
        ) : (
          <Button
            className="m-[-10px] cursor-pointer appearance-none"
            onClick={() => setCurrentState('Login')}
            type="button"
          >
            Login Here
          </Button>
        )}
      </div>
      <Button
        className="mt-2 h-10 w-30 rounded bg-black px-8 py-2 font-light text-white uppercase"
        type="submit"
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  );
}
