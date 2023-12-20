import { GenericListResponseType } from '@/api';

export type GetActionsResponse = GenericListResponseType<{
  id: number;
  title: string;
  type: 'relationship_task' | 'farm_task' | 'farm_kit';
  amountInCents: number;
  detail: string;
  initialDate?: string;
  finishDate?: string;
  status: 'rejected' | 'accepted' | 'not_evaluated';
  createdAt: string;
  updatedAt: string;
  planning: Planning;
  farmer: Farmer;
}>;

type Farmer = {
  id: number;
  cpf: string;
  createdAt: string;
  updatedAt: string;
  company_identifier: string;
  company_name: string;
  region?: any;
  district?: any;
  company_position: string;
  wallet: Wallet;
};

export type GetActionsParams = {
  farmerId?: number;
  pagination?: {
    page: number;
    pageSize: number;
  };
};
