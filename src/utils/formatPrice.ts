import { centsToInteger } from './centsToInteger';

export const formatPrice = (value?: string | number) => {
  const princeInReal = centsToInteger(Number(value));
  if ((!princeInReal && princeInReal !== 0) || Number.isNaN(princeInReal)) return '0,00';
  return new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(Number(princeInReal));
};
