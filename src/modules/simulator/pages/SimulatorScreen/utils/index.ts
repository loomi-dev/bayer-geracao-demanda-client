export const TARGET_PERCENTAGE = [0.3, 0.4, 0.5];

export const calculateRebound = (bagsQuantity: number, percentage: number) => {
  let reboundPercentValue = 0;

  if (percentage >= 0.3 && percentage < 0.4) reboundPercentValue = 5;
  if (percentage >= 0.4 && percentage < 0.5) reboundPercentValue = 8;
  if (percentage >= 0.5) reboundPercentValue = 15;

  return bagsQuantity * reboundPercentValue;
};

export const calculateFinalGenerationDemand = (
  bagsQuantity: number,
  plantability: number,
  percentage: number,
) => {
  let finalGenerationDemandPercentValue = 0;

  if (percentage >= 0.3 && percentage < 0.4) finalGenerationDemandPercentValue = 1;
  if (percentage >= 0.4 && percentage < 0.5) finalGenerationDemandPercentValue = 1.5;
  if (percentage >= 0.5) finalGenerationDemandPercentValue = 2;

  return (bagsQuantity / plantability) * finalGenerationDemandPercentValue;
};

export const calculateBiotecIncentive = (
  bagsQuantity: number,
  isBayerSellingOnly: boolean,
  percentage: number,
) => {
  let biotecIncentivePercentValue = 0;

  if (isBayerSellingOnly && percentage >= 0.3) biotecIncentivePercentValue = 8;

  return bagsQuantity * biotecIncentivePercentValue;
};

export const calculatePenetration = (
  bagsQuantity: number,
  i2xBagsQuantity: number,
  xtdBagsQuantity: number,
) => (i2xBagsQuantity + xtdBagsQuantity) / bagsQuantity;
