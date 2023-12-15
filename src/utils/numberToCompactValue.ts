export const numberToCompactValue = (value: number) => {
  const valueFormatted = new Intl.NumberFormat('pt-br', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value);

  return valueFormatted;
};
