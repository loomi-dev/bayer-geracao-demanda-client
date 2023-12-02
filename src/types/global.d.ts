type PlanningActionStatusType = 'rejected' | 'accepted' | 'not_evaluated';

type HistoricStatusType = 'ready_for_evaluation' | 'accepted' | 'rejected';

type PlanningActionType = {
  id: number;
  initialDate?: string;
  finishDate?: string;
  amountInCents?: number;
  detail?: string;
  status?: PlanningActionStatusType;
  title?: string;
  type?: string;
};

type HarvestType = {
  id: number;
  year?: string;
};

type PlanningType = {
  id: number;
  date?: string;
  safra?: HarvestType;
  actions?: PlanningActionType[];
};
