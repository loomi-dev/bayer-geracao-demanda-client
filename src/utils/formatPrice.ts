export const formatPrice = (value?: string | number) => {
  if ((!value && value !== 0) || Number.isNaN(value)) return '0,00';
  return new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(Number(value));
};
