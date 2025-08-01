import { useState } from 'react';

export function Login() {
  const [currentState, setCurrentState] = useState('Sign Up');

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //lógica de login para usuário.
    //Validar no backend o usuário e guardar autenticação no contexto.
    //Após isso, implementar Logout no usuário.
  };

  return (
    <form
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
      onSubmit={handlerSubmit}
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentState === 'Login' ? (
        ''
      ) : (
        <input
          className="w-full rounded border border-gray-800 px-3 py-2"
          placeholder="Username"
          required
          type="text"
        />
      )}
      <input
        className="w-full rounded border border-gray-800 px-3 py-2"
        placeholder="E-mail"
        required
        type="email"
      />
      <input
        className="w-full rounded border border-gray-800 px-3 py-2"
        placeholder="Password"
        required
        type="password"
      />

      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <button className="cursor-pointer appearance-none" type="button">
          Forgot your password?
        </button>
        {currentState === 'Login' ? (
          <button
            className="cursor-pointer appearance-none"
            onClick={() => setCurrentState('Sign Up')}
            type="button"
          >
            Create Account
          </button>
        ) : (
          <button
            className="cursor-pointer appearance-none"
            onClick={() => setCurrentState('Login')}
            type="button"
          >
            Login Here
          </button>
        )}
      </div>
      <button
        className="mt-2 rounded bg-black px-8 py-2 font-light text-white"
        type="submit"
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}
