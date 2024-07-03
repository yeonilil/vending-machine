// src/components/MachineContainer.stories.js
import React from "react";
import MachineContainer from "../components/containers/MachineContainer";
import useStore from "../store/coin";
import styles from "../styles/MachineContainer.module.scss";

export default {
  title: "components/Machine/MachineContainer",
  component: MachineContainer,
};

const Template = (args) => {
  const mockStore = {
    walletCoin: args.walletCoin,
    machineCoin: args.machineCoin,
    selectDrink: args.selectDrink,
    buyDrink: (price) => console.log(`Drink bought for ${price}`),
    updateSelectDrink: (drinks) => console.log("Selected drinks:", drinks),
    updateMachineCoin: (coin) => console.log(`Machine coin updated to ${coin}`),
    updateWalletCoin: (coin) => console.log(`Wallet coin updated to ${coin}`),
    updateInventory: (isUpdated) =>
      console.log(`Inventory updated: ${isUpdated}`),
  };

  useStore.mockImplementation((selector) => selector(mockStore));

  return (
    <div className={styles.storybookWrapper}>
      <MachineContainer />
    </div>
  );
};

export const DefaultState = Template.bind({});
DefaultState.args = {
  walletCoin: 5000,
  machineCoin: 3000,
  selectDrink: [],
};
DefaultState.storyName = "Default State";

export const InsufficientMachineCoin = Template.bind({});
InsufficientMachineCoin.args = {
  walletCoin: 5000,
  machineCoin: 200,
  selectDrink: [],
};
InsufficientMachineCoin.storyName = "Insufficient Machine Coin";

export const NoDrinkSelected = Template.bind({});
NoDrinkSelected.args = {
  walletCoin: 5000,
  machineCoin: 3000,
  selectDrink: [],
};
NoDrinkSelected.storyName = "No Drink Selected";

export const DrinkSelected = Template.bind({});
DrinkSelected.args = {
  walletCoin: 5000,
  machineCoin: 3000,
  selectDrink: [
    { id: 0, name: "Cola", inventory: 3, price: 1300, color: "#CD0000" },
  ],
};
DrinkSelected.storyName = "Drink Selected";
