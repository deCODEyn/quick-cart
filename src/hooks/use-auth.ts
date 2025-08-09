import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks';
import { decodeJwt } from '@/lib/jwt';
import { api } from '@/services/api';
import type { UseAuthReturn, UserRoleType } from '@/types';

export function useAuth(): UseAuthReturn {
  const { showErrorToast } = useToast();
  const [userRole, setUserRole] = useState<UserRoleType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = decodeJwt(token);
      if (user) {
        setUserRole(user.role);
      }
    }
    setLoading(false);
  }, []);

  const authLogin = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await api.post('/user/login', { email, password });
      const token = response.headers['x-access-token'] as string;
      if (token) {
        const user = decodeJwt(token);
        if (user) {
          localStorage.setItem('token', token);
          localStorage.setItem('userRole', user.role);
          setUserRole(user.role);
        }
      }
      return true;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data.message;
        showErrorToast(message);
      } else {
        showErrorToast(
          'An unexpected server error occurred. Please try again later.'
        );
      }
      return false;
    }
  };

  const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    setUserRole(null);
  };

  return { authLogin, authLogout, userRole, loading };
}
