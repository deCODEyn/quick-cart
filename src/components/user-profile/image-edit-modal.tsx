import { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Button } from '@/components';
import { useClickOutside } from '@/hooks';
import type { ImageEditModalInterface } from '@/types';

export function ImageEditModal({
  imageUrl,
  onClose,
  onSave,
  isLoading,
}: ImageEditModalInterface) {
  const editorRef = useRef<AvatarEditor | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose);

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        if (blob) {
          onSave(blob);
        }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50">
      <div
        className="relative w-full max-w-md rounded-md border border-gray-400 bg-gray-800 shadow-xl"
        ref={modalRef}
      >
        <div className="flex items-center justify-between border-gray-400 border-b p-4">
          <h2 className="p-1 text-gray-200 text-md">
            Crop your new profile image
          </h2>
          <Button
            className="cursor-pointer bg-transparent p-1 text-gray-400 text-lg shadow-none hover:bg-transparent hover:text-gray-50"
            onClick={onClose}
            size="icon"
          >
            X
          </Button>
        </div>
        <div className="m-auto flex items-center justify-center bg-gray-800 p-5">
          <AvatarEditor
            border={2}
            borderRadius={200}
            className="h-full w-full"
            color={[40, 50, 60, 0.5]}
            height={400}
            image={imageUrl}
            ref={editorRef}
            width={400}
          />
        </div>
        <div className="flex justify-end border-gray-400 border-t p-4">
          <Button
            className="w-full cursor-pointer rounded-md bg-green-600 p-4 font-medium text-md text-white hover:bg-green-700 active:bg-green-500 disabled:bg-gray-500"
            disabled={isLoading}
            onClick={handleSave}
          >
            Set new profile image
          </Button>
        </div>
      </div>
    </div>
  );
}
