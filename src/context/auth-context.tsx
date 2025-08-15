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
          (_result, _message, success) => {
            if (success) {
              fetchUser().then(() => {
                resolve(true);
              });
            } else {
              resolve(false);
            }
          },
          (requestSuccess) => resolve(requestSuccess)
        );
      });
      setIsLoading(false);

      return loginSuccess;
    },
    [execute, fetchUser, privateApi]
  );

  const authLogout = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    const logoutSuccess = await new Promise<boolean>((resolve) => {
      execute(
        () => privateApi.post('/user/logout'),
        (_result, _message, success) => {
          if (success) {
            setUserRole(null);
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (requestSuccess) => resolve(requestSuccess)
      );
    });
    setIsLoading(false);

    return logoutSuccess;
  }, [execute, privateApi]);

  const authRegister = useCallback(
    async (email: string, password: string, name: string): Promise<boolean> => {
      setIsLoading(true);
      const registerSuccess = await new Promise<boolean>((resolve) => {
        execute(
          () => privateApi.post('/user/register', { name, email, password }),
          (_result, _message, success) => {
            if (success) {
              fetchUser().then(() => {
                resolve(true);
              });
            } else {
              resolve(false);
            }
          },
          (requestSuccess) => resolve(requestSuccess)
        );
      });
      setIsLoading(false);

      return registerSuccess;
    },
    [execute, fetchUser, privateApi]
  );

  const value = { userRole, isLoading, authLogin, authLogout, authRegister };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      'useAuth must be used withinrequestSuccess an AuthProvider'
    );
  }
  return context;
};
