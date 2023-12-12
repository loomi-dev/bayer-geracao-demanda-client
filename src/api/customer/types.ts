import { GenericListResponseType, Pagination } from '@/api';

export type GetCustomerParams = {
  id: number;
  filter: {
    region?: string;
    district?: string;
    search?: string;
  };
  pagination: Pagination;
};

export type Customer = {
  date: Date;
  farmer: Farmer;
  historic: Historic[];
  financial_summary: FinancialSummary;
  actions: PlanningAction[];
  provenResourceAmountInCents: number;
};

export type GetCustomersResponse = GenericListResponseType<Customer>;
