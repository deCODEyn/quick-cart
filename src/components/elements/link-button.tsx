import { Link } from 'react-router-dom';
import type { LinkButtonType } from '@/types';

export function LinkButton({ href, label, className }: LinkButtonType) {
  return (
    <Link className="mt-4" to={href}>
      <button
        className={`${className} cursor-pointer rounded bg-black px-8 py-3 text-sm text-white uppercase hover:bg-gray-800 active:bg-gray-600`}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
}
