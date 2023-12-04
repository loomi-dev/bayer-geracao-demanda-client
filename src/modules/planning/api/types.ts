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

export type CreatePlanningData = {
  farmerId: number;
};
export type CreatePlanningResponse = {
  data: {
    date: string;
    id: number;
  };
};

export type GetPlanningActionsStatisticsParams = {
  planningId: number;
};
export type GetPlanningActionsStatisticsResponse = {
  data: {
    date: string;
    id: number;
    metric: {
      id: number;
      farm_kit_in_cents: number;
      farm_task_in_cents: string;
      relationship_task_in_cent: string;
    } | null;
  };
};

export type GetPlanningActionsParams = {
  page: number;
  planningId: number;
};
export type GetPlanningActionsResponse = GenericListResponseType<PlanningAction>;
