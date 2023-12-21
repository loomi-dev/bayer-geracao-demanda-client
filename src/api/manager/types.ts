import { GenericListResponseType } from '../types';

export type GetManagerParams = { id: number };
export type GetManagerResponse = GenericListResponseType<Manager>;

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
