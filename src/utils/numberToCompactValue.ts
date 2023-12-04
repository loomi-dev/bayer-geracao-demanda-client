export const numberToCompactValue = (value: number) => {
  const valueFormatted = new Intl.NumberFormat('pt-br', {
    notation: 'compact',
  }).format(value);

  return valueFormatted;
};
