import { create } from 'zustand';

type UseDrawerExpenseReceiptStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

export const useDrawerExpenseReceipt = create<UseDrawerExpenseReceiptStore>()((set, get) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
  onToggle: () => {
    const currentIsOpen = get().isOpen;
    set({ isOpen: !currentIsOpen });
  },
}));
