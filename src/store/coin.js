import { create } from "zustand";

const useStore = create((set) => ({
  walletCoin: 20000,
  machineCoin: 0,
  selectDrink: [],
  isPush: false,
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
  updateMachineCoin: (coin) => set({ machineCoin: coin }),
  updateWalletCoin: (coin) => set({ walletCoin: coin }),
  updateInventory: (push) => set({ isPush: push }),
}));

export default useStore;
