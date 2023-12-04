import dayjs from 'dayjs';

export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  return dayjs(date).format('DD/MM/YYYY');
};
