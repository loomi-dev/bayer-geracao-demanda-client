export type GetManagerParams = { managerId: number };
export type GetManagerResponse = { data: Manager };

export type UpdateManagerData = {
  managerId: number;
  username?: string;
  email?: string;
  confirmed?: boolean;
  phoneNumber?: string;
};
export type UpdateManagerResponse = {
  data: {
    manager: Manager;
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};
