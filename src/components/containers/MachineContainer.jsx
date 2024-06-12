import styles from "../../styles/MachineContainer.module.scss";
import useStore from "../../store/coin";

const drinks = [
  {
    name: "cocalcola",
    inventory: 3,
    price: 1300,
  },
  {
    name: "Dr pepper",
    inventory: 3,
    price: 1200,
  },
  {
    name: "Fanta",
    inventory: 3,
    price: 1000,
  },
  {
    name: "Lets Be",
    inventory: 3,
    price: 700,
  },
  {
    name: "Sprite",
    inventory: 3,
    price: 800,
  },
  {
    name: "Teiwa",
    inventory: 3,
    price: 900,
  },
  {
    name: "Water",
    inventory: 3,
    price: 400,
  },
  {
    name: "Welchs",
    inventory: 3,
    price: 1600,
  },
];
export default function MachineContainer() {
  const { machineCoin } = useStore();
  return (
    <div className={styles.machineContainer}>
      <div className={styles.drinkContainer}>
        {drinks.map((drink) => (
          <div>
            <div className={styles.drink}>
              <div className={styles.drinkName}>{drink.name}</div>
            </div>
            <div className={styles.drinkPrice}>\ {drink.price}</div>
          </div>
        ))}
      </div>

      <div className={styles.machineCoin}>\ {machineCoin}</div>

      <button className={styles.selectButton}></button>
      <button className={styles.getButton}>Push</button>
    </div>
  );
}
