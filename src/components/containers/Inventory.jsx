import { useEffect } from "react";
import useStore from "../../store/coin";
import styles from "../../styles/Inventory.module.scss";
import { lightenColor } from "../../utils/lightenColor";

export default function Inventory() {
  const { selectDrink, isPush } = useStore();

  useEffect(() => {
    console.log("selectDrink:", selectDrink);
    console.log("isPush:", isPush);
  }, [selectDrink, isPush]);

  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.inventoryTitle}>Inventory</div>
      <div className={styles.inventory}>
        {isPush && selectDrink.length > 0 ? (
          selectDrink.map((drink, index) => (
            <div key={index} className={styles.drinkContainer}>
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
          ))
        ) : (
          <p>No drinks</p>
        )}
      </div>
    </div>
  );
}
