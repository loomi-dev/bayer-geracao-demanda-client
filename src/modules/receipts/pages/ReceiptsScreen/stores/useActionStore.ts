import { create } from 'zustand';

import { GetActionsResponse } from '@/modules/api';

type UseActionStore = {
  selectedAction: ActionResponse | null;
  setSelectedAction: (selectedAction: ActionResponse) => void;
};

export type ActionResponse = GetActionsResponse['data'][0];

export const useActionStore = create<UseActionStore>()((set) => ({
  selectedAction: null,
  setSelectedAction: (selectedAction) => {
    set({ selectedAction });
  },
}));
