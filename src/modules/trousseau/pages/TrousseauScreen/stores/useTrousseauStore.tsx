import { create } from 'zustand';

type UseTrousseauStore = {
  supplierIds: number[];
  setSupplierIds: (ids: number[]) => void;
  selectedTrousseau: string;
  setSelectedTrousseau: (value: string) => void;
};

export const useTrousseauStore = create<UseTrousseauStore>()((set) => ({
  selectedTrousseau: '',
  supplierIds: [],
  setSelectedTrousseau: (value) => {
    set({ selectedTrousseau: value });
  },
  setSupplierIds: (ids) => {
    set({ supplierIds: ids });
  },
}));
