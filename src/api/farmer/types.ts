import { GenericListResponseType } from '../types';

export type GetFarmerParams = {
  farmerId: number;
};
export type GetFarmerResponse = GenericListResponseType<Farmer>;

export type UpdateFarmerData = {
  id: number;
  name: string;
  email: string;
  companyRole: string;
  password: string;
  confirmPassword: string;
  confirmed: boolean;
  number: string;
};
export type UpdateFarmerResponse = {
  data: {
    farmer: Farmer;
    jwt: string;
    user: User;
  };
};
