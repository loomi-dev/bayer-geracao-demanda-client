import { GenericListResponseType } from '@/api';

export type GetCustomerParams = {
  id: number | undefined;
  filter: {
    region?: string;
    district?: string;
    search?: string; //TODO vai virar search
  };
  pagination: {
    pageSize: number;
    page: number;
  };
};

export type Customer = {
  date: Date;
  farmer: Farmer;
  historic: any; // TODO
};

export type GetCustomersResponse = GenericListResponseType<Customer>;