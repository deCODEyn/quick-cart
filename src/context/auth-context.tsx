import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useApiRequest, usePrivateRequest } from '@/hooks';
import type {
  AuthContextInterface,
  ContextProviderType,
  SingleUserResponse,
  UserRoleType,
  UserType,
} from '@/types';

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

export const AuthProvider = ({ children }: ContextProviderType) => {
  const privateApi = usePrivateRequest();
  const { execute } = useApiRequest();
  const [userRole, setUserRole] = useState<UserRoleType | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const fetchUser = useCallback(async (): Promise<void> => {
    const { result, success } = await execute<UserType>(
      () => privateApi.get<SingleUserResponse>('/users/me'),
      true
    );
    if (success && result) {
      setUser(result);
      setUserRole(result.role);
    } else {
      setUser(null);
      setUserRole(null);
    }
  }, [execute, privateApi]);

  useEffect(() => {
    const initAuth = async () => {
      await fetchUser();
      setIsAuthReady(true);
    };
    initAuth();
  }, [fetchUser]);

  const authLogin = useCallback(
    async (
      email: string,
      password: string
    ): Promise<{ success: boolean; message: string }> => {
      const { success, message } = await execute(() =>
        privateApi.post('/users/login', { email, password })
      );
      if (success) {
        fetchUser();
      }
      return { success, message: message || '' };
    },
    [execute, fetchUser, privateApi]
  );

  const authLogout = useCallback(async (): Promise<boolean> => {
    const { success } = await execute(() => privateApi.post('/users/logout'));
    if (success) {
      setUser(null);
      setUserRole(null);
    }
    return success;
  }, [execute, privateApi]);

  const authRegister = useCallback(
    async (
      email: string,
      password: string,
      name: string
    ): Promise<{ success: boolean; message: string }> => {
      const { success, message } = await execute(() =>
        privateApi.post('/users/register', { name, email, password })
      );
      if (success) {
        fetchUser();
      }
      return { success, message: message || '' };
    },
    [execute, fetchUser, privateApi]
  );

  const value = {
    user,
    userRole,
    isAuthReady,
    authLogin,
    authLogout,
    authRegister,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
