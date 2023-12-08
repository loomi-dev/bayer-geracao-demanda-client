export type CreatePlanningActionData = {
  farmerId: number;
  planningId: number;
  title: string;
  type: PlanningActionType;
  amountInCents: number;
  detail?: string;
  status: PlanningActionStatus;
  initialDate: string;
  finishDate: string;
};
export type CreatePlanningActionResponse = void;
