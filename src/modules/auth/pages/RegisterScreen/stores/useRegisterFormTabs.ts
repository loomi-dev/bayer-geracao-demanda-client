import { create } from 'zustand';

type UseRegisterFormTabsStore = {
  agreePrivacyPolicies: boolean;
  currentTabForm: 0 | 1;
  setCurrentTabForm: (tab: 0 | 1) => void;
  setAgreePrivacyPolicies: (agree: boolean) => void;
};

export const useRegisterFormTabs = create<UseRegisterFormTabsStore>((set) => ({
  agreePrivacyPolicies: false,
  currentTabForm: 0,
  setCurrentTabForm: (tab) => set(() => ({ currentTabForm: tab })),
  setAgreePrivacyPolicies: (agree) => set(() => ({ agreePrivacyPolicies: agree })),
}));
