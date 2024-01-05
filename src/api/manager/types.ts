export type GetManagerParams = { managerId: number };
export type GetManagerResponse = { data: Manager };

export type UpdateManagerData = {
  managerId: number;
  username?: string;
  email?: string;
  confirmed?: boolean;
  phoneNumber?: string;
  imageId?: number;
};
export type UpdateManagerResponse = {
  data: {
    manager: Manager;
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};

export type GetDashboardParams = {
  filters: {
    farmers_ids?: string[];
    districts?: string[];
    regions?: string[];
    actions_types?: string[];
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
