import { Button } from '@/components';
import type { AuthButtonSelectInterface } from '@/types';

export function AuthButtonSelect({
  isLogin,
  onToggleForm,
  onForgotPasswordClick,
}: AuthButtonSelectInterface) {
  return (
    <div className="mt-[-8px] flex w-full justify-between text-sm">
      {isLogin && (
        <Button
          className="m-[-10px] cursor-pointer appearance-none border-none bg-transparent text-current shadow-none hover:bg-transparent focus:outline-none focus-visible:ring-0"
          onClick={onForgotPasswordClick}
          type="button"
        >
          Forgot your password?
        </Button>
      )}
      <Button
        className="m-[-10px] cursor-pointer appearance-none border-none bg-transparent text-current shadow-none hover:bg-transparent focus:outline-none focus-visible:ring-0"
        onClick={onToggleForm}
        type="button"
      >
        {isLogin ? 'Create Account' : 'Login Here'}
      </Button>
    </div>
  );
}
