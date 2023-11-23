import { AuthUser } from '@/api/endpoints/auth';
import { IS_CLIENT, USER_INFO_ID } from '@/config';

export const storage = {
  getUser: () =>
    IS_CLIENT ? JSON.parse(window.localStorage.getItem(`${USER_INFO_ID}`) as string) : null,
  setUser: (user: AuthUser) =>
    IS_CLIENT ? window.localStorage.setItem(`${USER_INFO_ID}`, JSON.stringify(user)) : null,
  clearUser: () => (IS_CLIENT ? window.localStorage.removeItem(`${USER_INFO_ID}`) : null),
};
