import { GenericListResponseType } from '@/api';

export type GetPlanningStatisticsParams = {
  farmerId: number;
};
export type GetPlanningStatisticsResponse = GenericListResponseType<{
  name: string;
  planning_summary: PlanningSummary;
}>;

export type GetFarmerPlansParams = {
  page: number;
  farmerId: number;
};
export type GetFarmerPlansResponse = {
  meta: {
    plannedAmountAggregateInCents: number;
  } & GenericListResponseType<Planning>['meta'];
  data: GenericListResponseType<Planning>['data'];
};

export type CreatePlanningData = {
  farmerId: number;
  harvestId: number;
};
export type CreatePlanningResponse = {
  data: {
    id: number;
  };
};

export type GetPlanningActionsStatisticsParams = {
  planningId: number;
};
export type GetPlanningActionsStatisticsResponse = {
  data: {
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
  pagination?: Pagination;
  planningId: number;
};
export type GetPlanningActionsResponse = GenericListResponseType<PlanningAction>;

export type GetPlanningHistoricParams = { planningId: number };
export type GetPlanningHistoricResponse = {
  data: {
    createdAt: string;
    historic: Historic[];
    id: number;
    title: string;
  };
};

export type GetPlanningStatusParams = {
  planningId: number;
};
export type GetPlanningStatusResponse = {
  data: {
    createdAt: string;
    historic: Historic[];
  };
};

export type UpdatePlanningHistoricParams = {
  planningId: number;
  payload: {
    historic: Historic[];
    description?: string;
    status: HistoricStatus;
    userId: number;
    actions?: PlanningAction[];
  };
};

export type UpdatePlanningHistoricResponse = {
  data: {
    id: number;
    date: Date;
    status: string;
  };
};

export type DeletePlanningParams = {
  planningId: number;
};
export type DeletePlanningResponse = void;

export type GetFarmerPendingPlanningsParams = {
  farmerId: number;
};
export type GetFarmerPendingPlanningsResponse = {
  data: {
    plannings: Planning[];
  };
};

export type GetPlanningsResponse = GenericListResponseType<Planning>;
