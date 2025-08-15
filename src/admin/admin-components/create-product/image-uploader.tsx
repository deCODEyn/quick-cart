import { ImageUp } from 'lucide-react';
import type { ImageFiles, ImageUploaderTypes } from '@/admin/admin-types';
import { Image, Input } from '@/components';

export function ImageUploader({
  images,
  handleImageChange,
}: ImageUploaderTypes) {
  return (
    <div>
      <h3 className="mb-2 text-lg">Upload Images</h3>
      <div className="flex gap-5">
        {Object.keys(images).map((imageKey) => {
          const file = images[imageKey as keyof ImageFiles];
          const key = imageKey as keyof ImageFiles;
          return (
            <label htmlFor={key} key={key}>
              {file ? (
                <Image
                  alt={`${key} preview!`}
                  className="size-20 cursor-pointer"
                  src={URL.createObjectURL(file)}
                />
              ) : (
                <ImageUp className="size-20 cursor-pointer" />
              )}
              <Input
                hidden
                id={key}
                onChange={(e) => handleImageChange(e, key)}
                required={key === 'image1'}
                type="file"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
