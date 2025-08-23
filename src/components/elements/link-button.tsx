import { Link } from 'react-router-dom';
import { Button } from '@/components';
import type { LinkButtonType } from '@/types';

export function LinkButton({
  href,
  label,
  className,
  state,
  children,
}: LinkButtonType) {
  return (
    <Link state={state} to={href}>
      <Button
        className={`${className || 'h-10 cursor-pointer rounded bg-black px-10 py-4 text-white uppercase hover:bg-gray-700 active:bg-gray-500'}`}
        type="button"
      >
        {children}
        {label}
      </Button>
    </Link>
  );
}
