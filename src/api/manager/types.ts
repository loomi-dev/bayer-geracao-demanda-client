export type GetManagerParams = { managerId: number };
export type GetManagerResponse = { data: Manager };

export type UpdateManagerData = {
  managerId: number;
  username: string;
  email: string;
  phoneNumber: string;
};
export type UpdateManagerResponse = {
  data: {
    manager: Manager;
    jwt: string;
    user: User;
  };
};
