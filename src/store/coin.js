import { create } from "zustand";

const useStore = create((set) => ({
  walletCoin: 20000,
  machineCoin: 0,
  selectDrink: [],
  insertCoin: (value = 1) =>
    set((state) => ({
      machineCoin: state.machineCoin + value,
      walletCoin: state.walletCoin - value,
    })),
  buyDrink: (coin) =>
    set((state) => ({
      machineCoin: state.machineCoin - coin,
    })),
  updateSelectDrink: (newSelectDrink) => set({ selectDrink: newSelectDrink }),
}));

export default useStore;
