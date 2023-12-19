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
  phone: string;
};
export type UpdateUserResponse = {
  data: {
    farmer: Farmer;
    jwt: string;
    user: User;
  };
};
