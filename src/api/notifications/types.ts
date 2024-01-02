import { GenericListResponseType } from '../types';

export type GetNotificationsByUserParams = {
  userId: number;
  pagination: Pagination;
};
export type GetNotificationsByUserResponse = GenericListResponseType<UserNotification>;
