import { Button } from '@/components';
import type { LoginButtonType } from '@/types';

export function LoginButton({
  isLogin = true,
  isLoading,
  className,
}: LoginButtonType) {
  return (
    <Button className={className} disabled={isLoading} type="submit">
      {isLogin
        ? `${isLoading ? 'Logging in' : 'Login'}`
        : `${isLoading ? 'Registering' : 'Sign Up'}`}
    </Button>
  );
}
