export const APP_NAME = 'Bayer - Geração de Demanda';

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const ENVIRONMENT = process.env.NODE_ENV;

export const DEFAULT_PUBLIC_PAGE = '/entrar';

export const DEFAULT_PRIVATE_PAGE = '/';

export const ACCESS_TOKEN_ID = 'next-leap_access';
export const REFRESH_TOKEN_ID = 'next-leap_refresh';
export const USER_INFO_ID = 'next-leap_user-info';

export const JWT_ACCESS_SECRET = '123456' as string;
export const JWT_ACCESS_EXPIRES_IN = 10;
export const JWT_REFRESH_SECRET = '123456789' as string;
export const JWT_REFRESH_EXPIRES_IN = 50;

export const IS_CLIENT = typeof window !== 'undefined';
