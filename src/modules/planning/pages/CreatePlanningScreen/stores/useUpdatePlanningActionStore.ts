import { create } from 'zustand';

type UseUpdatePlanningActionStoreType = {
  currentStep: number;
  setCurrentStep: (newCurrentStep: number) => void;
};

export const useUpdatePlanningActionStore = create<UseUpdatePlanningActionStoreType>((set) => ({
  currentStep: 0,
  setCurrentStep: (newCurrentStep) => set(() => ({ currentStep: newCurrentStep })),
}));
