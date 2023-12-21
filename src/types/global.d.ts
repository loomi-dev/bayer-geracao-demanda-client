type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Roles;
  lastAccess: string;
  phone?: string;
  company_identifier?: string;
  company_position?: string;
  farmer?: Farmer;
  manager?: Manager;
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
  related: {
    role: {
      name: Roles;
    };
  } & Omit<User, 'role'>;
  creation_date: string;
  description: string;
  status: HistoricStatus;
};

type Planning = {
  title: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  safra?: Harvest;
  actions?: PlanningAction[];
  historic?: Historic[];
  farmer?: Farmer;
};

type Wallet = {
  balance: number;
  initialBalance: number;
  id: number;
};

type Manager = {
  id: number;
  current_planned_amount_in_cents: string;
  region?: string;
  district?: string;
};

type Farmer = {
  company_identifier: string;
  company_name?: string;
  company_position?: string;
  cpf: string;
  id: number;
  name?: string;
  wallet?: Wallet;
  safra?: Harvest;
  users_permissions_user?: User;
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

type TrousseauCatalog = {
  id: number;
  name: string;
  description: string;
  photo: {
    url: string;
  };
  document: {
    name: string;
    url: string;
  };
};
type TrousseauItem = {
  id: number;
  name: string;
  photo: {
    url: string;
  };
};

type TrousseauSupplier = {
  email: string;
  id: number;
  name: string;
  phoneNumber: string;
  region: string;
};
type Trousseau = {
  id: number;
  name: string;
  material_items: TrousseauItem[];
  catalogs: TrousseauCatalog[];
  suppliers: TrousseauSupplier[];
};
