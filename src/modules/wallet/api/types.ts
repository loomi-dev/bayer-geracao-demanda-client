import { GenericListResponseType } from '@/api';

export type FarmerWallet = {
  balance: number;
  id: number;
};

export type Farmer = {
  company_identifier: string;
  company_name: string;
  cpf: string;
  id: number;
  name: string;
  wallet: FarmerWallet;
};

export type GetFaqsResponse = void;
export type GetFarmersResponse = GenericListResponseType<Farmer>;
