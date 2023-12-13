import { create } from 'zustand';

import { GetActionsResponse } from '@/modules/receipts/api';

type UseActionStore = {
  selectedAction: ActionResponse | null;
  setSelectedAction: (selectedAction: ActionResponse) => void;
};

export type ActionResponse = GetActionsResponse['data'][0];

export const useActionStore = create<UseActionStore>()((set, get) => ({
  selectedAction: null,
  setSelectedAction: (selectedAction) => {
    set({ selectedAction });
  },
}));
