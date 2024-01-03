export type Credentials = {
  identifier: string;
  password: string;
};

export type LoginWithCredentialsData = Credentials;
export type LoginWithCredentialsResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
