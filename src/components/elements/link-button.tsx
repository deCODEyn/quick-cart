import { Link } from 'react-router-dom';
import { Button } from '@/components';
import type { LinkButtonType } from '@/types';

export function LinkButton({ href, label, className }: LinkButtonType) {
  return (
    <Link to={href}>
      <Button
        className={`${className} h-12 cursor-pointer rounded bg-black px-8 py-3 text-sm text-white uppercase hover:bg-gray-700 active:bg-gray-600`}
        type="button"
      >
        {label}
      </Button>
    </Link>
  );
}
