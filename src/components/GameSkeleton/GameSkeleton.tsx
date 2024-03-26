import styles from "./GameSkeleton.module.scss";

export default function GameSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
    </div>
  );
}
