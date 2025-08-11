import axios, { type AxiosInstance } from 'axios';
import { useMemo } from 'react';
import { api } from '@/services/api';

export function usePrivateRequest(): AxiosInstance {
  const privateRequest = useMemo(() => {
    const instance = axios.create({
      baseURL: api.defaults.baseURL,
      headers: {
        ...api.defaults.headers
      },
      withCredentials: true,
    });

    return instance;
  }, []);

  return privateRequest;
}
