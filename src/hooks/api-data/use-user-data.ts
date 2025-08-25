import { useCallback } from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type { SingleUserResponse, UserType } from '@/types';

export function useUserData() {
  const { execute, isLoading } = useApiRequest();
  const privateApi = usePrivateRequest();

  const setProfileImage = useCallback(
    async (croppedBlob: Blob): Promise<SingleUserResponse> => {
      return await execute<UserType>(() =>
        privateApi.patch<SingleUserResponse>(
          'users/profile-image',
          { profileImage: croppedBlob },
          { headers: { 'Content-Type': 'multipart/form-data' } }
        )
      );
    },
    [execute, privateApi]
  );

  const getMe = useCallback(async (): Promise<SingleUserResponse> => {
    return await execute<UserType>(
      () => privateApi.get<SingleUserResponse>('/users/me'),
      true
    );
  }, [execute, privateApi]);

  const userLogin = useCallback(
    async (email: string, password: string): Promise<SingleUserResponse> => {
      return await execute<UserType>(() =>
        privateApi.post<SingleUserResponse>('/users/login', { email, password })
      );
    },
    [execute, privateApi]
  );

  const userLogout = useCallback(async (): Promise<SingleUserResponse> => {
    return await execute<UserType>(() =>
      privateApi.post<SingleUserResponse>('/users/logout')
    );
  }, [execute, privateApi]);

  const userRegister = useCallback(
    async (
      email: string,
      password: string,
      name: string
    ): Promise<SingleUserResponse> => {
      return await execute<UserType>(() =>
        privateApi.post<SingleUserResponse>('/users/register', {
          name,
          email,
          password,
        })
      );
    },
    [execute, privateApi]
  );

  const updateProfile = useCallback(
    async (userData: UserType): Promise<SingleUserResponse> => {
      return await execute<UserType>(() =>
        privateApi.patch<SingleUserResponse>('/users/profile', userData)
      );
    },
    [execute, privateApi]
  );

  return {
    setProfileImage,
    updateProfile,
    getMe,
    userLogin,
    userLogout,
    userRegister,
    isLoading,
  };
}
