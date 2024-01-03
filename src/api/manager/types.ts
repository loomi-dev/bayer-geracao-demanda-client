export type GetManagerParams = { managerId: number };
export type GetManagerResponse = { data: Manager };

export type UpdateManagerData = {
  managerId: number;
  username?: string;
  email?: string;
  confirmed?: boolean;
  phoneNumber?: string;
};
export type UpdateManagerResponse = {
  data: {
    manager: Manager;
    jwt: string;
    user: User;
  };
};

export type GetDashboardResponse = {
  data: {
    farmKitSumInCents: number;
    farmTaskSumInCents: number;
    plannedActionsAmountAvailable: number;
    plannedActionsAmountLimit: number;
    plannedActionsAmountUsed: number;
    plannedActionsQuantity: number;
    relationshipTaskSumInCents: number;
    plannedActionsAmountComproved: number;
  };
};
