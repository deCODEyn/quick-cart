import { Input, Label } from '@/components';
import type { EditSocialMediaInterface } from '@/types';

export function EditSocialMedia({
  socialMedia,
  register,
}: EditSocialMediaInterface) {
  const socialPlatforms = Object.keys(
    socialMedia || {}
  ) as (keyof typeof socialMedia)[];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {socialPlatforms.map((platform) => (
        <div className="space-y-2" key={platform}>
          <Label htmlFor={platform}>
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </Label>
          <Input
            className="w-full rounded border border-gray-400 focus-visible:border-gray-500 focus-visible:ring-0"
            id={`socialMedia.${platform}`}
            {...register(`socialMedia.${platform}` as const)}
          />
        </div>
      ))}
    </div>
  );
}
