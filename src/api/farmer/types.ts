import { GenericListResponseType } from '../types';

export type GetFarmerParams = {
  farmerId: number;
};
export type GetFarmerResponse = GenericListResponseType<Farmer>;
