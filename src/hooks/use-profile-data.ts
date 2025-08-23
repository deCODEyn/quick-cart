import { useCallback } from 'react';
import { useAuthContext } from '@/context';
import { useApiRequest } from './use-api-request';
import { usePrivateRequest } from './use-private-request';

export function useProfileData() {
  const { execute } = useApiRequest();
  const privateApi = usePrivateRequest();
  const { fetchUser } = useAuthContext();

  const setProfileImage = useCallback(
    async (croppedBlob: Blob): Promise<boolean> => {
      const { success } = await execute(() =>
        privateApi.patch(
          'users/profile-image',
          { profileImage: croppedBlob },
          { headers: { 'Content-Type': 'multipart/form-data' } }
        )
      );
      if (success) {
        await fetchUser();
        return success
      }
      return false
    },
    [execute, privateApi, fetchUser]
  );

  return setProfileImage;
}
