import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState, createContext, useContext } from 'react';

import {
  LoginCredentials,
  RegisterCredentials,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '@/api/endpoints/auth';
import { storage, cookies } from '@/utils';

import { Roles, AuthResponse, AuthUser } from './types';

type User = {
  id: string;
  name: string;
  email: string;
  userType: Roles;
  isAdmin: boolean;
};

export type AuthContextData = {
  user: User | null;
  logoutFn: () => void;
  handleUserResponse: (body: AuthResponse) => AuthUser | null;
  loginFn: (data: LoginCredentials) => void;
  registerFn: (data: RegisterCredentials) => void;
};

type AuthProviderData = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = ({ children }: AuthProviderData) => {
  const [user, setUser] = useState<User | null>(storage.getUser());
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleUserResponse = ({ authUser, accessToken, refreshToken }): AuthUser | null => {
    storage.setUser(authUser);
    cookies.setAccess(accessToken);
    cookies.setRefresh(refreshToken);

    setUser(authUser);

    return authUser;
  };

  const logoutFn = (): void => {
    storage.clearUser();
    cookies.clearAccess();
    router.push('/');
    setUser(null);
  };

  async function loadUser() {
    const access = cookies.getAccess();
    const user = storage.getUser();

    if (!access || !user) {
      storage.clearUser();
      cookies.clearAccess();
      return null;
    }

    return user;
  }

  async function loginFn(data: LoginCredentials) {
    const response = await loginWithEmailAndPassword(data);
    const user = handleUserResponse(response);
    return user;
  }

  async function registerFn(data: RegisterCredentials) {
    const response = await registerWithEmailAndPassword(data);
    const user = handleUserResponse(response);
    return user;
  }

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => setMounted(true), []);

  return mounted ? (
    <AuthContext.Provider
      value={{
        user,
        logoutFn,
        handleUserResponse,
        registerFn,
        loginFn,
      }}
    >
      {children}
    </AuthContext.Provider>
  ) : (
    <></>
  );
};

export const useAuthContext = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuthContext must be used whithin an AuthContextProvider');

  return context;
};
