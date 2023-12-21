export type Manager = {
  farmers: Farmer[];
  safra: Harvest;
  current_planned_amount_in_cents: number;
};

export type GetManagerParams = { managerId: number };
export type GetManagerResponse = { data: Manager };
