import { GenericListResponseType } from '@/api';

export type GetCustomerParams = {
  id: number | undefined;
  filter: {
    region?: string;
    district?: string;
    company_identifier?: string; //TODO vai virar search
  };
};

type Customer = {
  date: Date;
  farmer: Farmer;
  historic: any; // TODO
};

export type GetCustomersResponse = GenericListResponseType<Customer>;
