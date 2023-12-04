import { GenericListResponseType } from '../types';

export type Manager = {
  farmers: Farmer[];
  safra: Safra;
  current_planned_amount_in_cents: number;
};

export type GetManagerParams = { id: number | undefined };
export type GetManagerResponse = GenericListResponseType<Manager>;
