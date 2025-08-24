import { useEffect, useRef, useState } from 'react';
import { Button, Input } from '@/components';
import { useClickOutside } from '@/hooks';
import type { ValidatePasswordModalInterface } from '@/types';

export function ValidatePasswordModal({
  onClose,
  onConfirm,
}: ValidatePasswordModalInterface) {
  const [password, setPassword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, onClose);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-50">
      <div
        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-xl"
        ref={modalRef}
      >
        <h2 className="mb-4 font-semibold text-gray-900 text-lg">
          Please confirm your password
        </h2>
        <Input
          className="w-full rounded border border-gray-400 focus-visible:border-gray-500 focus-visible:ring-0"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          ref={inputRef}
          type="password"
          value={password}
        />
        <div className="mt-5 flex justify-end gap-2">
          <Button
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
            disabled={!password.trim()}
            onClick={() => onConfirm(password)}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
