type PlanningSummary = {
  farm_in_task_cents: number;
  id: number;
  farm_kit_in_cents: number;
  planned_actions: number;
  planned_budget_in_cents: number;
  relationship_action_in_cents: number;
  total_budget_value: number;
};
type PlanningActionStatus = 'rejected' | 'accepted' | 'not_evaluated';
type PlanningActionType = 'farm_task' | 'farm_kit' | 'relationship_task';

type HistoricStatus = 'ready_for_evaluation' | 'accepted' | 'rejected';

type Roles = 'Farmer' | 'Manager';

type PlanningAction = {
  id: number;
  initialDate?: string;
  finishDate?: string;
  amountInCents?: number;
  detail?: string;
  status?: PlanningActionStatus;
  title?: string;
  type?: PlanningActionType;
};

type Harvest = {
  id: number;
  year?: string;
  deadline_to_add_plannings: string;
};

type Historic = {
  id: number;
  actions: PlanningAction[];
  creation_date: string;
  description: string;
  status: HistoricStatus;
};

type Planning = {
  id: number;
  date?: string;
  safra?: Harvest;
  actions?: PlanningAction[];
  historic?: Historic[];
};

type Wallet = {
  balance: number;
  id: number;
};

type Farmer = {
  company_identifier: string;
  company_name: string;
  cpf: string;
  id: number;
  name: string;
  wallet: Wallet;
  safra: Harvest;
};

type Pagination = {
  pageSize: number;
  page: number;
};
