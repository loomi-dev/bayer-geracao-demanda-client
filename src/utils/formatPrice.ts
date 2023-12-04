import { centsToInteger } from './centsToInteger';

export const formatPrice = (value?: string | number) => {
  const priceInReal = centsToInteger(Number(value));
  if ((!priceInReal && priceInReal !== 0) || Number.isNaN(priceInReal)) return '0,00';
  return new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(Number(priceInReal));
};
