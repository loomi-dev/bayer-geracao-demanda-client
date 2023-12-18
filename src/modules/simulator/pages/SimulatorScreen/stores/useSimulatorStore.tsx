import { create } from 'zustand';

const formatValue = (value: string) => parseFloat(value.replaceAll('.', '').replaceAll(',', '.'));
type UseSimulatorStore = {
  bagsQuantity: number;
  i2xBagsQuantity: number;
  xtdBagsQuantity: number;
  plantability: number;
  isBayerSellingOnly: boolean;
  setIsBayerSellingOnly: (value: boolean) => void;
  setPlantability: (value: number) => void;
  setXtdBagsQuantity: (quantity: string) => void;
  setI2xBagsQuantity: (quantity: string) => void;
  setBagsQuantity: (quantity: string) => void;
};

export const useSimulatorStore = create<UseSimulatorStore>((set) => ({
  bagsQuantity: 0,
  i2xBagsQuantity: 0,
  xtdBagsQuantity: 0,
  plantability: 0.8,
  isBayerSellingOnly: true,
  setPlantability: (value) => set(() => ({ plantability: value })),
  setIsBayerSellingOnly: (value) => set(() => ({ isBayerSellingOnly: value })),
  setXtdBagsQuantity: (quantity) => set(() => ({ xtdBagsQuantity: formatValue(quantity) })),
  setI2xBagsQuantity: (quantity) => set(() => ({ i2xBagsQuantity: formatValue(quantity) })),
  setBagsQuantity: (quantity) => set(() => ({ bagsQuantity: formatValue(quantity) })),
}));
