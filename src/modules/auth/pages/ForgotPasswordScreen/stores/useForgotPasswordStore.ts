import { create } from 'zustand';

type UseForgotPasswordStoreProps = {
  recoveryEmail: string | null;
  setRecoveryEmail: (email: string | null) => void;
  forgotPasswordStep: number;
  setForgotPasswordStep: (newStep: number) => void;
};

export const useForgotPasswordStore = create<UseForgotPasswordStoreProps>((set) => ({
  recoveryEmail: null,
  setRecoveryEmail: (email) => {
    set(() => ({
      recoveryEmail: email,
    }));
  },
  forgotPasswordStep: 0,
  setForgotPasswordStep: (newStep) => {
    set(() => ({
      forgotPasswordStep: newStep,
    }));
  },
}));
