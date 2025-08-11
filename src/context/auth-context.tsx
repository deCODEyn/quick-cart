import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useApiRequest, usePrivateRequest, useToast } from '@/hooks';
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
  const { isLoading, execute } = useApiRequest();
  const { showSuccessToast } = useToast();
  const [userRole, setUserRole] = useState<UserRoleType | null>(null);

  const fetchUser = useCallback(async (): Promise<void> => {
    await execute<UserType>(
      () => privateApi.get<SingleUserResponse>('/user/me'),
      (user) => setUserRole(user.role)
    );
  }, [execute, privateApi]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const authLogin = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      let success = false;
      await execute(
        () => privateApi.post('/user/login', { email, password }),
        () => {
          showSuccessToast('Login successful!');
          success = true;
        },
        async () => await fetchUser()
      );
      return success;
    },
    [execute, fetchUser, showSuccessToast, privateApi]
  );

  const authLogout = useCallback(async () => {
    await execute(
      () => privateApi.post('/user/logout'),
      () => {
        setUserRole(null);
        showSuccessToast('Logged out successfully.');
      }
    );
  }, [execute, privateApi, showSuccessToast]);

  const value = { userRole, isLoading, authLogin, authLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
