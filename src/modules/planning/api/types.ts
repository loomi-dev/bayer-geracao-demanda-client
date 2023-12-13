export type PatchPlanningActionData = {
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

export type CreatePlanningActionData = PatchPlanningActionData;
export type CreatePlanningActionResponse = void;

export type DeletePlanningActionParams = {
  actionId: number;
};
export type DeletePlanningActionResponse = void;

export type UpdatePlanningActionData = {
  planningActionId: number;
} & PatchPlanningActionData;
export type UpdatePlanningActionResponse = void;
