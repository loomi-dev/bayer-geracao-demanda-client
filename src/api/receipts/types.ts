import { GenericListResponseType } from '@/api';

export type Faq = {
  question: string;
  answer: string;
};

export type GetFaqsResponse = GenericListResponseType<Faq>;

export type GetFarmerData = { id: number | string };

export type GetActionsResponse = {
  data: Array<{
    id: number;
    title: string;
    type: 'relationship_task' | 'farm_task' | 'farm_kit';
    amountInCents: number;
    detail: string;
    initialDate?: string;
    finishDate?: string;
    status: 'rejected' | 'accepted' | 'not_evaluated';
    createdAt: string;
    updatedAt: string;
    planning: Planning;
    farmer: Farmer;
  }>;
  meta: Meta;
};

export type ActionResponse = GetActionsResponse['data'][0];

type Planning = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title?: any;
  safra: Safra;
};

type Safra = {
  id: number;
  createdAt: string;
  updatedAt: string;
  year: string;
  deadline_to_add_plannings?: any;
  current: boolean;
};

export type UploadFileParams = {
  files: File[];
};

export type UploadFileResponse = {
  id: number;
  name: string;
  alternativeText?: unknown;
  caption?: unknown;
  width: number;
  height: number;
  formats?: Format;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
};

type Format = {
  thumbnail: Thumbnail;
};

type Thumbnail = {
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

export type GetCropsResponse = {
  data: Datum[];
  meta: Meta;
};

type Meta = {
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Datum = {
  id: number;
  createdAt: string;
  updatedAt: string;
  year: string;
  deadline_to_add_plannings?: unknown;
  current: boolean;
};

export type PutActionParams = {
  actionId: number;
  body: PutActionBody;
};

type PutActionBody = {
  data: Data;
};

type Data = {
  receipts: Receipt;
};

type Receipt = {
  approved: boolean;
  documents: UploadFileResponse[];
  description: string;
};

export type GetActionsParams = {
  farmerId?: number;
  pagination?: {
    page: number;
    pageSize: number;
  };
};

export type GetAchievementParams = {
  farmerId: number;
  safraId: number;
};

export type GetAchievementResponse = {
  data: Array<{
    id: number;
    amount_won_in_cent: string;
    amount_to_be_won_in_cent: string;
    createdAt: string;
    updatedAt: string;
    safra: Safra;
  }>;
  meta: Meta;
};

export type GetExampleReceiptsResponse = {
  data: Array<{
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    documents: Document[];
  }>;
  meta: Meta;
};

type Document = {
  id: number;
  name: string;
  alternativeText?: any;
  caption?: any;
  width?: any;
  height?: any;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
};
