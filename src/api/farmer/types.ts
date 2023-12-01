import { GenericListResponseType } from '../types';

export type FarmerWalletType = {
  balance: number;
  id: number;
};

export type FarmerType = {
  company_identifier: string;
  company_name: string;
  cpf: string;
  id: number;
  name: string;
  wallet: FarmerWalletType;
};

export type GetFarmerParams = {
  farmerId: number;
};
export type GetFarmerResponse = GenericListResponseType<FarmerType>;
