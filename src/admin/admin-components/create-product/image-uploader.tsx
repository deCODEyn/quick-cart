import { ImageUp } from 'lucide-react';
import type { ImageFiles, ImageUploaderTypes } from '@/admin/admin-types';
import { Image, Input, Label } from '@/components';

export function ImageUploader({
  images,
  handleImageChange,
}: ImageUploaderTypes) {
  return (
    <div>
      <Label className="mb-2 text-lg">Upload Images</Label>
      <div className="flex gap-5">
        {Object.keys(images).map((imageKey) => {
          const file = images[imageKey as keyof ImageFiles];
          const key = imageKey as keyof ImageFiles;
          return (
            <Label htmlFor={key} key={key}>
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
            </Label>
          );
        })}
      </div>
    </div>
  );
}
