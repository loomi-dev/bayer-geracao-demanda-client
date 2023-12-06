export type CreatePlanningActionData = {
  farmerId: number;
  planningId: number;
  title: string;
  type: PlanningActionType;
  amountInCents: number;
  detail?: string;
  status: PlanningActionStatus;
};
export type CreatePlanningActionResponse = void;
