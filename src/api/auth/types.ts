export type Credentials = {
  identifier: string;
  password: string;
};
export type UserType = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: 'Farmer' | 'Manager';
};

export type LoginWithCredentialsData = Credentials;
export type LoginWithCredentialsResponse = {
  jwt: string;
  user: UserType;
};

export type UpdateUserData = {
  id: number;
  name: string;
  email: string;
  companyRole: string;
  password: string;
  confirmPassword: string;
  confirmed: boolean;
};
export type UpdateUserResponse = {
  data: UserType;
};
