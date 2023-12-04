import { GenericListResponseType } from '@/api';

export type Faq = {
  question: string;
  answer: string;
};

export type GetFaqsResponse = GenericListResponseType<Faq>;
