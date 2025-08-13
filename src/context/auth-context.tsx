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
  const { execute } = useApiRequest();
  const { showSuccessToast, showWarningToast } = useToast();
  const [userRole, setUserRole] = useState<UserRoleType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async (): Promise<void> => {
    await execute<UserType>(
      () => privateApi.get<SingleUserResponse>('/user/me'),
      (user) => setUserRole(user.role),
      () => {
        /* onFinish */
      },
      true
    );
  }, [execute, privateApi]);

  useEffect(() => {
    const loadAuth = async () => {
      setIsLoading(true);
      await fetchUser();
      setIsLoading(false);
    };
    loadAuth();
  }, [fetchUser]);

  const authLogin = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      const loginSuccess = await new Promise<boolean>((resolve) => {
        execute(
          () => privateApi.post('/user/login', { email, password }),
          (_, message, success) => {
            if (success) {
              fetchUser().then(() => {
                resolve(true);
              });
            } else {
              showWarningToast(message || 'Login failed.');
              resolve(false);
            }
          }
        );
      });

      setIsLoading(false);
      return loginSuccess;
    },
    [execute, fetchUser, privateApi, showWarningToast]
  );

  const authLogout = useCallback(async () => {
    setIsLoading(true);
    await execute(
      () => privateApi.post('/user/logout'),
      () => {
        setUserRole(null);
        showSuccessToast('Logged out successfully.');
      }
    );
    setIsLoading(false);
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
