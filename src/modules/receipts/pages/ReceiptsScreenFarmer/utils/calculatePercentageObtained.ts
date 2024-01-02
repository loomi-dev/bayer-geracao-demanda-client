export const calculatePercentageObtained = (valueObtained: number, amount: number): number => {
  if (amount === 0) return 0;
  const percentageObtained = (valueObtained / amount) * 100;
  return percentageObtained;
};
