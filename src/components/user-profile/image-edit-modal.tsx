import { useEffect, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Button } from '@/components';

export function ImageEditModal({
  imageUrl,
  onClose,
  onSave,
}: {
  imageUrl: string;
  onClose: () => void;
  onSave: (blob: Blob) => void;
}) {
  const editorRef = useRef<AvatarEditor | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        if (blob) {
          onSave(blob);
          onClose();
        }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50">
      <div
        className="relative w-full max-w-sm rounded-md border border-gray-400 bg-gray-800 shadow-xl"
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
        <div className="m-5 flex items-center justify-center bg-gray-800 p-2">
          <AvatarEditor
            border={2}
            borderRadius={150}
            color={[47, 52, 61, 0.5]}
            height={300}
            image={imageUrl}
            ref={editorRef}
            width={300}
          />
        </div>
        <div className="flex justify-end border-gray-400 border-t p-4">
          <Button
            className="w-full rounded-md bg-green-600 p-4 font-medium text-md text-white hover:bg-green-700 active:bg-green-500"
            onClick={handleSave}
          >
            Set new profile image
          </Button>
        </div>
      </div>
    </div>
  );
}
