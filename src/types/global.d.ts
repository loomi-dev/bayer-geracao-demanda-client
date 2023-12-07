type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Roles;
  company_position: string;
  lastAccess: Date;
};
type PlanningSummary = {
  id: number;
  farm_task_in_cents: number;
  farmk_kit_in_cents: number;
  planned_actions: number;
  planned_budget_in_cents: number;
  relationship_action_in_cents: number;
  total_budget_in_cents: number;
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
  related: User;
  creation_date: string;
  description: string;
  status: HistoricStatus;
};

type Planning = {
  title: string;
  createdAt: Date;
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
  users_permissions_user: User;
};

type Pagination = {
  pageSize: number;
  page: number;
};

type FinancialSummary = {
  balance_in_cents: number;
  final_resource_in_cents: number;
  id: number;
  initial_resource_in_cents: number;
  utilized_in_cents: number;
};
