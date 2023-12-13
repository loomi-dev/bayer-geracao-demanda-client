import { create } from 'zustand';

import { GetCropsResponse, getCrops } from '@/modules/receipts/api';

type UseCropsStore = {
  getCrops: () => void;
  crops: null | GetCropsResponse;
};

export const useCropsStore = create<UseCropsStore>()((set, get) => ({
  crops: null,
  getCrops: async () => {
    const currentCrops = get().crops;

    if (currentCrops) return;

    const response = await getCrops();

    set({ crops: response });
  },
}));
