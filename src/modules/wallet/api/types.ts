import { GenericListResponseType } from '@/api';

export type FarmerWallet = {
  balance: number;
  id: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type GetFaqsResponse = GenericListResponseType<Faq>;
export type GetFarmerData = { id: number | string };
export type GetFarmerResponse = GenericListResponseType<Farmer>;
