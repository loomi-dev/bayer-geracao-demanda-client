type TargetPercentage = 0.3 | 0.4 | 0.5;
type TargetValue = number;
type Target = Record<TargetPercentage, TargetValue>;

export const TARGET_PERCENTAGE = [0.3, 0.4, 0.5];

const BIOTEC_INCENTIVE: Target = {
  0.3: 8,
  0.4: 8,
  0.5: 8,
};

const FINAL_GENERATION_DEMAND: Target = {
  0.3: 1,
  0.4: 1.5,
  0.5: 2,
};
const REBOUND_VALUES: Target = {
  0.3: 5,
  0.4: 8,
  0.5: 15,
};

export const calculateRebound = (bagsQuantity: number, percentage: TargetPercentage) => {
  if (percentage < 0.3) return 0;
  return bagsQuantity * REBOUND_VALUES[percentage];
};

export const calculateFinalGenerationDemand = (
  bagsQuantity: number,
  plantability: number,
  percentage: TargetPercentage,
) => {
  if (percentage < 0.3) return 0;
  return bagsQuantity / (plantability * FINAL_GENERATION_DEMAND[percentage]);
};

export const calculateBiotecIncentive = (
  bagsQuantity: number,
  isBayerSellingOnly: boolean,
  percentage: TargetPercentage,
) => {
  if (!isBayerSellingOnly) return 0;
  bagsQuantity * BIOTEC_INCENTIVE[percentage];
};

export const calculatePenetration = (
  bagsQuantity: number,
  i2xBagsQuantity: number,
  xtdBagsQuantity: number,
) => (i2xBagsQuantity + xtdBagsQuantity) / bagsQuantity;
