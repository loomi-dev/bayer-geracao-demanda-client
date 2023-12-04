import { GenericListResponseType } from '@/api';

export type GetPlanningStatisticsParams = {
  userId: number;
};
export type GetPlanningStatisticsResponse = GenericListResponseType<{
  name: string;
  planning_summary: PlanningSummary;
}>;

export type GetFarmerPlansParams = {
  farmerId: number;
};
export type GetFarmerPlansResponse = GenericListResponseType<Planning>;
