import { GenericListResponseType } from '../types';

export type District = {
  name: string;
};

export type GetFarmerParams = {
  farmerId: number;
};
export type GetFarmerResponse = GenericListResponseType<Farmer>;

export type UpdateFarmerData = {
  farmerId: number;
  username?: string;
  email?: string;
  companyPosition?: string;
  password?: string;
  confirmPassword?: string;
  confirmed?: boolean;
  phoneNumber?: string;
  imageId?: number;
};
export type UpdateFarmerResponse = {
  data: {
    farmer: Farmer;
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};

export type GetFarmersResponse = GenericListResponseType<Farmer>;

export type GetDistrictsParams = { managerId: number };
export type GetDistrictsResponse = GenericListResponseType<District>;
