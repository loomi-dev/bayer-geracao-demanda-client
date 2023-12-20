import { create } from 'zustand';

import { ActionResponse } from '@/api';

type UseActionStore = {
  selectedAction: ActionResponse | null;
  setSelectedAction: (selectedAction: ActionResponse) => void;
};

export const useActionStore = create<UseActionStore>()((set, get) => ({
  selectedAction: null,
  setSelectedAction: (selectedAction) => {
    set({ selectedAction });
  },
}));
