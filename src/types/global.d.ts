type Safra = { id: number; deadline_to_add_plannings: Date; year: string };

type PlanningSummary = {
  farm_in_task_cents: number;
  id: number;
  farm_kit_in_cents: number;
  planned_actions: number;
  planned_budget_in_cents: number;
  relationship_action_in_cents: number;
  total_budget_value: number;
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
