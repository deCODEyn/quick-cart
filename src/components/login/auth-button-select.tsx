import { Button } from '@/components';
import type { AuthButtonSelectInterface } from '@/types';

const buttonClass =
  '-m-3 cursor-pointer appearance-none border-none bg-transparent text-current shadow-none hover:bg-transparent focus:outline-none focus-visible:ring-0';

export function AuthButtonSelect({
  isLogin,
  onToggleForm,
  onForgotPasswordClick,
}: AuthButtonSelectInterface) {
  return (
    <div className="-mt-2 flex w-full justify-between text-sm">
      {isLogin && (
        <Button
          className={buttonClass}
          onClick={onForgotPasswordClick}
          type="button"
        >
          Forgot your password?
        </Button>
      )}
      <Button className={buttonClass} onClick={onToggleForm} type="button">
        {isLogin ? 'Create Account' : 'Login Here'}
      </Button>
    </div>
  );
}
