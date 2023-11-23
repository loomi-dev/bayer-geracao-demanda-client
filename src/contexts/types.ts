export type AuthUser = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  authUser: AuthUser;
};

export enum Roles {
  ADMIN = 'admin',
  PREFECTUREMANAGER = 'prefectureManager',
  COMPANYMANAGER = 'companyManager',
  COORDINATOR = 'coordinator',
  TECHNICIAN = 'technician',
  EXECUTOR = 'executor',
}
