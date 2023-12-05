import dayjs from 'dayjs';

export const formatMonth = (date?: string | null): string => {
  if (!date) return '';

  return dayjs(date).format('MMMM');
};
