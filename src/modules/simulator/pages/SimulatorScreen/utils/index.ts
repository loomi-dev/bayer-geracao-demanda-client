export const TARGET_PERCENTAGE = [0.3, 0.4, 0.5];

export const calculateRebound = (bagsQuantity: number, percentage: number) => {
  let reboundPercentValue = 0;

  if (percentage >= TARGET_PERCENTAGE[0] && percentage < TARGET_PERCENTAGE[1])
    reboundPercentValue = 5;
  if (percentage >= TARGET_PERCENTAGE[1] && percentage < TARGET_PERCENTAGE[2])
    reboundPercentValue = 8;
  if (percentage >= TARGET_PERCENTAGE[2]) reboundPercentValue = 15;

  return bagsQuantity * reboundPercentValue;
};

export const calculateFinalGenerationDemand = (
  bagsQuantity: number,
  plantability: number,
  percentage: number,
) => {
  let finalGenerationDemandPercentValue = 0;

  if (percentage >= TARGET_PERCENTAGE[0] && percentage < TARGET_PERCENTAGE[1])
    finalGenerationDemandPercentValue = 1;
  if (percentage >= TARGET_PERCENTAGE[1] && percentage < TARGET_PERCENTAGE[2])
    finalGenerationDemandPercentValue = 1.5;
  if (percentage >= TARGET_PERCENTAGE[2]) finalGenerationDemandPercentValue = 2;

  return (bagsQuantity / plantability) * finalGenerationDemandPercentValue;
};

export const calculateBiotecIncentive = (
  bagsQuantity: number,
  isBayerSellingOnly: boolean,
  percentage: number,
) => {
  let biotecIncentivePercentValue = 0;

  if (isBayerSellingOnly && percentage >= TARGET_PERCENTAGE[0]) biotecIncentivePercentValue = 8;

  return bagsQuantity * biotecIncentivePercentValue;
};

export const calculatePenetration = (
  bagsQuantity: number,
  i2xBagsQuantity: number,
  xtdBagsQuantity: number,
) => (i2xBagsQuantity + xtdBagsQuantity) / bagsQuantity;
