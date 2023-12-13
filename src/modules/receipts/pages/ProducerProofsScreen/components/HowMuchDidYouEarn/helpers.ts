export const convertToReais = (value: number | string) => {
  const number = Number(value);

  if (number === 0) return 0;

  return number / 100;
};

export const calculatePercentageObtained = (valueObtained: number, amount: number): number => {
  if (amount === 0) return 0;
  const porcentagemObtida = (valueObtained / amount) * 100;
  return porcentagemObtida;
};
