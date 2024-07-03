import styles from "../../styles/MachineContainer.module.scss";
import useStore from "../../store/coin";
import { lightenColor } from "../../utils/lightenColor";

const drinks = [
  {
    id: 0,
    name: "Cola",
    inventory: 3,
    price: 1300,
    color: "#CD0000",
  },
  {
    id: 1,
    name: "Dr pepper",
    inventory: 5,
    price: 1200,
    color: "#FF8200",
  },
  {
    id: 2,
    name: "Fanta",
    inventory: 2,
    price: 1000,
    color: "#FFC341",
  },
  {
    id: 3,
    name: "Lets Be",
    inventory: 6,
    price: 700,
    color: "#0A82FF",
  },
  {
    id: 4,
    name: "Sprite",
    inventory: 9,
    price: 800,
    color: "#329632",
  },
  {
    id: 5,
    name: "Choco",
    inventory: 10,
    price: 900,
    color: "#D27328",
  },
  {
    id: 6,
    name: "Water",
    inventory: 20,
    price: 400,
    color: "#93DAFF",
  },
  {
    id: 7,
    name: "Welchs",
    inventory: 30,
    price: 1600,
    color: "#FF7493",
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
    // 음료 선택
    let selectedDrink = drinks.find((drink) => drink.id === id);
    if (
      selectedDrink &&
      selectedDrink.inventory > 0 &&
      selectedDrink.price <= machineCoin
    ) {
      updateSelectDrink([...selectDrink, selectedDrink]);
      drinks[selectedDrink.id].inventory -= 1; // 재고 감소
      buyDrink(selectedDrink.price);
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
            <div className={styles.drinkAnimation}>
              <div className={styles.drinkTop}></div>
              <div
                className={styles.drink}
                style={{
                  backgroundColor: drink.color,
                  boxShadow: `inset 3px 3px 3px 3px ${lightenColor(
                    drink.color,
                    15
                  )}`,
                }}
              >
                <div className={styles.drinkName}>{drink.name}</div>
              </div>
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

      <div className={styles.machineCoin}> {machineCoin}</div>
      <button className={styles.changeButton} onClick={handleChange}></button>
      <button className={styles.getButton} onClick={handlePush}>
        Push
      </button>
    </div>
  );
}
