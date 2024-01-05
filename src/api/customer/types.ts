import { GenericListResponseType, Pagination } from '@/api';

export type GetCustomerPlanningsByUserIdParams = {
  managerId: number;
  filter?: {
    regions?: string[];
    districts?: string[];
    search?: string;
    customers?: string[];
    harvests?: string[];
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
