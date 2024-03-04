import styles from "./Condition.module.scss";
import Switch from "@/components/UI/Switch/Switch";

export default function Condition() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>
        <h3 className={styles.heading}>Введите цену в рублях</h3>
        <input type={"number"} className={styles.value + " " + styles.input} />
      </div>
      <div className={styles.state}>
        <h3 className={styles.heading}>Новое</h3>
        <Switch />
      </div>
    </div>
  );
}
