import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useUserData } from '@/hooks';
import type { UserRoleType, UserType } from '@/schemas';
import type { AuthContextInterface, ContextProviderType } from '@/types';

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

export const AuthProvider = ({ children }: ContextProviderType) => {
  const { getMe, userLogin, userLogout, userRegister, isLoading } =
    useUserData();
  const [userRole, setUserRole] = useState<UserRoleType | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const fetchUser = useCallback(async (): Promise<void> => {
    const { result, success } = await getMe();
    if (success && result) {
      setUser(result);
      setUserRole(result.role);
    } else {
      setUser(null);
      setUserRole(null);
    }
  }, [getMe]);

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
      const { success, message } = await userLogin(email, password);
      if (success) {
        fetchUser();
      }
      return { success, message: message || '' };
    },
    [userLogin, fetchUser]
  );

  const authLogout = useCallback(async (): Promise<boolean> => {
    const { success } = await userLogout();
    if (success) {
      setUser(null);
      setUserRole(null);
    }
    return success;
  }, [userLogout]);

  const authRegister = useCallback(
    async (
      email: string,
      password: string,
      name: string
    ): Promise<{ success: boolean; message: string }> => {
      const { success, message } = await userRegister(email, password, name);
      if (success) {
        fetchUser();
      }
      return { success, message: message || '' };
    },
    [userRegister, fetchUser]
  );

  const value = {
    user,
    userRole,
    isAuthReady,
    isLoading,
    authLogin,
    authLogout,
    authRegister,
    fetchUser,
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
