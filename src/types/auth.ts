export interface UseAuthReturn {
  authLogin: (email: string, password: string) => Promise<boolean>;
  authLogout: () => void;
  userRole: UserRoleType | null;
  loading: boolean;
}
export type UserType = {
  role: UserRoleType;
  email: string;
}


export type UserRoleType = 'Admin' | 'User';
