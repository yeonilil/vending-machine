import styles from "../../styles/MachineContainer.module.scss";
import useStore from "../../store/coin";

const drinks = [
  {
    id: 0,
    name: "Cola",
    inventory: 0,
    price: 1300,
  },
  {
    id: 1,
    name: "Dr pepper",
    inventory: 0,
    price: 1200,
  },
  {
    id: 2,
    name: "Fanta",
    inventory: 0,
    price: 1000,
  },
  {
    id: 3,
    name: "Lets Be",
    inventory: 0,
    price: 700,
  },
  {
    id: 4,
    name: "Sprite",
    inventory: 0,
    price: 800,
  },
  {
    id: 5,
    name: "Teiwa",
    inventory: 0,
    price: 900,
  },
  {
    id: 6,
    name: "Water",
    inventory: 0,
    price: 400,
  },
  {
    id: 7,
    name: "Welchs",
    inventory: 0,
    price: 1600,
  },
];
export default function MachineContainer() {
  const {
    walletCoin,
    machineCoin,
    selectDrink,
    buyDrink,
    updateSelectDrink,
    updateMachineCoin,
    updateWalletCoin,
    updateInventory,
  } = useStore();

  const handleDrinkSelect = (id) => {
    //음료 선택
    let selectedDrink = drinks.find((drink) => drink.id === id);
    if (
      selectedDrink &&
      selectedDrink.inventory > 0 &&
      selectedDrink.price <= machineCoin
    ) {
      updateSelectDrink([...selectDrink, selectedDrink]);
      drinks[selectedDrink.id].inventory += 1; //재고
      buyDrink(selectedDrink.price); //자판기 남은 금액
    }
  };
  const handleChange = () => {
    //거스름돈
    updateWalletCoin(machineCoin + walletCoin);
    updateMachineCoin(0);
  };

  const handlePush = () => {
    updateInventory(true);
  };
  return (
    <div className={styles.machineContainer}>
      <div className={styles.drinksContainer}>
        {drinks.map((drink) => (
          <div className={styles.drinkContainer}>
            <div className={styles.drinkTop}></div>
            <div className={styles.drink}>
              <div className={styles.drinkName}>{drink.name}</div>
            </div>
            <button
              className={
                drink.inventory >= 0 && drink.price <= machineCoin
                  ? styles.drinkPrice
                  : styles.unableDrink
              }
              onClick={() => {
                handleDrinkSelect(drink.id);
              }}
            >
              {drink.price}
            </button>
          </div>
        ))}
      </div>

      <div className={styles.machineCoin}>\ {machineCoin}</div>
      <button className={styles.changeButton} onClick={handleChange}></button>
      <button className={styles.getButton} onClick={handlePush}>
        Push
      </button>
    </div>
  );
}
