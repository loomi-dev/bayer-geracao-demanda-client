import { GenericListResponseType } from '@/api';

export type FarmerWallet = {
  balance: number;
  id: number;
};

export type Harvest = {
  createdAt: Date;
  deadline_to_add_plannings: Date;
  id: number;
  year: string;
};
export type Faq = {
  question: string;
  answer: string;
};

export type Farmer = {
  company_identifier: string;
  company_name: string;
  cpf: string;
  id: number;
  name: string;
  wallet?: FarmerWallet;
  harvest?: Harvest;
};

export type GetFaqsResponse = GenericListResponseType<Faq>;

export type GetFarmerData = { id: number | string };
export type GetFarmerResponse = GenericListResponseType<Farmer>;
