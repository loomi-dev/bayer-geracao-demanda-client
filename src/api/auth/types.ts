export type Credentials = {
  identifier: string;
  password: string;
};

export type LoginWithCredentialsData = Credentials;
export type LoginWithCredentialsResponse = {
  jwt: string;
  user: User;
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
  data: User;
};
