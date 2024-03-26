import styles from "./News.module.scss";
import NewsList from "@/components/News/NewsList/NewsList";

export default function News() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h1 className={styles.head}>Новости</h1>
      </div>
      <NewsList />
    </div>
  );
}
