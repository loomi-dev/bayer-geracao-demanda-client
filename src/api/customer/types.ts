import { GenericListResponseType, Pagination } from '@/api';

export type GetCustomerPlanningsByUserIdParams = {
  managerId: number;
  filter?: {
    region?: string;
    district?: string;
    search?: string;
    customers?: string[];
  };
  pagination?: Pagination;
};

export type CustomerPlannings = {
  id: number;
  date: Date;
  farmer: Farmer;
  historic: Historic[];
  financial_summary: FinancialSummary;
  actions: PlanningAction[];
  updatedAt: string;
  provenResourceAmountInCents: number;
};

export type GetCustomerPlanningsByUserIdResponse = GenericListResponseType<CustomerPlannings>;
