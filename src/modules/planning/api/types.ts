import { GenericListResponseType } from '@/api';

export type GetPlanningStatisticsParams = {
  userId: number;
};
export type GetPlanningStatisticsResponse = GenericListResponseType<{
  planning_summary: {
    id: number;
    farm_task_in_cents: number;
    farmk_kit_in_cents: number;
    planned_actions: number;
    planned_budget_in_cents: number;
    relationship_action_in_cents: number;
    total_budget_in_cents: number;
  };
}>;

export type GetFarmerPlansParams = {
  farmerId: number;
};
export type GetFarmerPlansResponse = GenericListResponseType<Planning>;
