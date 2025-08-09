import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks';
import { decodeJwt } from '@/lib/jwt';
import type { UseAuthReturn, UserRoleType } from '@/types';
import { env } from '@/utils/env';

export function useAuth(): UseAuthReturn {
  const { showErrorToast } = useToast();
  const [userRole, setUserRole] = useState<UserRoleType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const roleFromStorage = localStorage.getItem('userRole') as UserRoleType;
    if (roleFromStorage) {
      setUserRole(roleFromStorage);
    }
    setLoading(false);
  }, []);

  const authLogin = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${env.VITE_BACKEND_URL}/api/user/login`,
        {
          email,
          password,
        }
      );
      const token = response.headers['x-access-token'] as string;
      if (token) {
        const user = decodeJwt(token);
        if (user) {
          localStorage.setItem('token', token);
          localStorage.setItem('userEmail', user.email);
          localStorage.setItem('userId', user.userId);
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
