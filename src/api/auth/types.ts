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

export type GetTokensData = {
  refreshToken: string;
};
export type GetTokensResponse = {
  accessToken: string;
  refreshToken: string;
};
