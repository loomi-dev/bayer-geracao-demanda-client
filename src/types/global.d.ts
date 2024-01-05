type FileThumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: unknown;
  size: number;
  width: number;
  height: number;
};
type FileFormat = {
  thumbnail: FileThumbnail;
};
type FileDocument = {
  id: number;
  name: string;
  alternativeText?: unknown;
  caption?: unknown;
  width?: unknown;
  height?: unknown;
  formats?: FileFormat[];
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: unknown;
  provider: string;
  provider_metadata?: unknown;
  createdAt: string;
  updatedAt: string;
};

type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Roles;
  lastAccess: string;
  phoneNumber?: string;
  farmer?: Farmer;
  manager?: Manager;
  safra: Harvest;
  photo: FileDocument;
};
type PlanningSummary = {
  id: number;
  farm_task_in_cents: number;
  farm_kit_in_cents: number;
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
  metric?: PlanningMetric;
};

type PlanningMetric = {
  id: number;
  farm_kit_in_cents: number;
  farm_task_in_cents: string;
  relationship_task_in_cent: string;
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
  farmers: Farmer[];
  safra: Harvest;
};

type Farmer = {
  company_identifier: string;
  company_name?: string;
  company_position?: string;
  cpf: string;
  id: number;
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
  suppliers: TrousseauSupplier[];
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

type Receipt = {
  description: string;
  id: number;
  status: string;
  documents: FileDocument[];
};
type ReceiptAction = {
  farmer: Farmer;
  receipts: Receipt;
  createdAt: string;
} & PlanningAction;

type UserNotification = {
  id: number;
  createdAt: string;
  updatedAt: string;
  read: boolean;
  missingPlanning: string;
  totalPlanning: string;
  planning: Planning;
  type: string;
  safra: Harvest;
};
