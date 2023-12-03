type PlanningActionStatus = 'rejected' | 'accepted' | 'not_evaluated';

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
  type?: string;
};

type Harvest = {
  id: number;
  year?: string;
};

type Planning = {
  id: number;
  date?: string;
  safra?: Harvest;
  actions?: PlanningAction[];
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
};
