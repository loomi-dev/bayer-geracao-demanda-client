type ActionStatusType = 'rejected' | 'accepted' | 'not_evaluated';

type HistoricStatusType = 'ready_for_evaluation' | 'accepted' | 'rejected';

type ActionType = {
  id: number;
  initialDate?: string;
  finishDate?: string;
  amountInCents?: number;
  detail?: string;
  status?: ActionStatusType;
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
  actions?: ActionType[];
};
