import styles from "./NewsSkeleton.module.scss";

export default function NewsSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>
        <div className={styles.image}>
          <div className={styles.skeleton}></div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <div className={styles.name}></div>
            <div className={styles.skeleton}></div>
          </div>
          <div className={styles.date}>
            <div className={styles.skeleton}></div>
          </div>
        </div>
      </div>
      <div className={styles.advertisement}>
        <div className={styles.skeleton}></div>
      </div>
    </div>
  );
}
