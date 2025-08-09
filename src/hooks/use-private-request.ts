import axios, { type AxiosInstance } from 'axios';
import { useMemo } from 'react';
import { api } from '@/services/api';

export function usePrivateRequest(): AxiosInstance {
  const token = localStorage.getItem('token');
  const privateRequest = useMemo(() => {
    if (!token) {
      return api;
    }

    const instance = axios.create({
      baseURL: api.defaults.baseURL,
      headers: {
        ...api.defaults.headers,
        Authorization: `Bearer ${token}`,
      },
    });
    instance.interceptors.response.use(
      (response) => {
        const newToken = response.headers['x-access-token'];
        if (newToken) {
          localStorage.setItem('token', newToken);
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return instance;
  }, [token]);

  return privateRequest;
}
