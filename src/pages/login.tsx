import { useState } from 'react';
import { Button, Input } from '@/components';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { authLogin, authRegister } = useAuthContext();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { showSuccessToast, showWarningToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      const loginSuccess = await authLogin(email, password);
    } else {
      const registerSuccess = await authRegister(email, password, name);
    }
  };

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
        <Input
          className="w-full rounded border border-gray-800 px-3 py-2 focus-visible:ring-0"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          type="text"
          value={name}
        />
      )}
      <Input
        className="w-full rounded border border-gray-800 px-3 py-2 focus-visible:ring-0"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required
        type="email"
        value={email}
      />
      <Input
        className="w-full rounded border border-gray-800 px-3 py-2 focus-visible:ring-0"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        type="password"
        value={password}
      />

      <div className="mt-[-8px] flex w-full justify-between text-sm">
        {isLogin && (
          <Button
            className="m-[-10px] cursor-pointer appearance-none border-none bg-transparent text-current shadow-none hover:bg-transparent focus:outline-none focus-visible:ring-0"
            type="button"
          >
            Forgot your password?
          </Button>
        )}
        <Button
          className="m-[-10px] cursor-pointer appearance-none border-none bg-transparent text-current shadow-none hover:bg-transparent focus:outline-none focus-visible:ring-0"
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
