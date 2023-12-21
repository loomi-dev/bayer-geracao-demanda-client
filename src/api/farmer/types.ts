import { GenericListResponseType } from '../types';

export type GetFarmerParams = {
  farmerId: number;
};
export type GetFarmerResponse = GenericListResponseType<Farmer>;

export type UpdateFarmerData = {
  farmerId: number;
  username: string;
  email: string;
  company_position: string;
  password?: string;
  confirmPassword?: string;
  confirmed?: boolean;
  phoneNumber?: string;
};
export type UpdateFarmerResponse = {
  data: {
    farmer: Farmer;
    jwt: string;
    user: User;
  };
};
