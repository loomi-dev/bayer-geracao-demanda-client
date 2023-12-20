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
  username: string;
  email: string;
  company_position: string;
  phoneNumber: string;
};
export type UpdateUserResponse = {
  farmer: Farmer;
  jwt: string;
  user: User;
};
