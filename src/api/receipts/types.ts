import { GenericListResponseType } from '@/api';

export type Faq = {
  question: string;
  answer: string;
};
export type GetFaqsResponse = GenericListResponseType<Faq>;

export type GetFarmerData = { id: number | string };

export type GetReceiptsActionsParams = {
  farmerId?: number;
  filter?: {
    farmerId?: number;
    search?: string;
    customers?: string[];
    regions?: string[];
  };
  pagination: Pagination;
};
export type GetReceiptsActionsResponse = GenericListResponseType<ReceiptAction>;

export type UploadFileParams = {
  files: File[];
};
export type UploadFileResponse = FileDocument[];

type Achievement = {
  id: number;
  amount_won_in_cent: string;
  amount_to_be_won_in_cent: string;
  createdAt: string;
  updatedAt: string;
  safra: Harvest;
};
export type GetAchievementParams = {
  farmerId: number;
  harvestId: number;
};
export type GetAchievementResponse = GenericListResponseType<Achievement>;

type ExampleReceipt = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  documents: FileDocument[];
};
export type GetExampleReceiptsResponse = GenericListResponseType<ExampleReceipt>;

export type SendReceiptActionData = {
  actionId: number;
  documents: FileDocument[];
  description: string;
};
export type SendReceiptActionResponse = void;

type ReceiptsSummary = {
  metric: {
    farm_kit_in_cents: number;
    farm_task_in_cents: number;
    relationship_task_in_cent: number;
  };
  provenResourceAmountInCents: number;
};

export type GetReceiptsSummaryParams = { farmerId: number };
export type GetReceiptsSummaryResponse = GenericListResponseType<ReceiptsSummary>;
