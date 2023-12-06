import { create } from 'zustand';

type UseCreatePlanningActionStoreType = {
  currentStep: number;
  setCurrentStep: (newCurrentStep: number) => void;
};

export const useCreatePlanningActionStore = create<UseCreatePlanningActionStoreType>((set) => ({
  currentStep: 0,
  setCurrentStep: (newCurrentStep) => set(() => ({ currentStep: newCurrentStep })),
}));
