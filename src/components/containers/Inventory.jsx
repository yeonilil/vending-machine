import useStore from "../../store/coin";
import styles from "../../styles/Inventory.module.scss";

export default function Inventory() {
  const { selectDrink } = useStore();
  console.log(selectDrink);
  return (
    <div className={styles.inventory}>
      {selectDrink.map((drink) => (
        <div className={styles.drinkContainer}>
          <div className={styles.drinkTop}></div>
          <div className={styles.drink}>
            <div className={styles.drinkName}>{drink.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
