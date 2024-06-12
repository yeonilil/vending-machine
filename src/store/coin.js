import { create } from "zustand";

const useStore = create((set) => ({
  walletCoin: 20000,
  machineCoin: 0,
  insertCoin: (value = 1) =>
    set((state) => ({
      machineCoin: state.machineCoin + value,
      walletCoin: state.walletCoin - value,
    })),
}));

export default useStore;
