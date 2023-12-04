import { GenericListResponseType } from '../types';

export type Manager = {
  farmers: Farmer[];
  safra: Harvest;
  current_planned_amount_in_cents: number;
};

export type GetManagerParams = { id: number };
export type GetManagerResponse = GenericListResponseType<Manager>;
