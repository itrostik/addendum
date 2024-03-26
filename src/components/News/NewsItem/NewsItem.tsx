import styles from "./NewsItem.module.scss";
import { NewsType } from "@/types/newsType";
import Image from "next/image";
import getTime from "@/utils/getTime";

export default function NewsItem({ news }: { news: NewsType }) {
  return (
    <>
      {news ? (
        <div className={styles.wrapper}>
          <div className={styles.author}>
            <Image
              src={news.user_avatar}
              alt={"avatar"}
              priority
              width={45}
              height={45}
              className={styles.image}
            />
            <div className={styles.info}>
              <span className={styles.infoTop}>
                <span className={styles.name}>{news.user_name}</span>
                {news.type === "sales" && (
                  <span className={styles.action}>выставил на продажу</span>
                )}
                {news.type === "auctions" && (
                  <span className={styles.action}>создал аукцион</span>
                )}
                {news.type === "exchanges" && (
                  <span className={styles.action}>хочет обменяться</span>
                )}
              </span>
              <span className={styles.date}>{getTime(news.creation_time)}</span>
            </div>
          </div>
          <div className={styles.advertisement}>
            <div className={styles.left}>
              <Image
                src={news.game_image}
                alt={"game"}
                width={70}
                height={70}
                className={styles.gameImage}
              />
              <div className={styles.info}>
                <div className={styles.infoTop}>
                  <span className={styles.name}>{news.game_name}</span>
                  {news.game_is_new ? (
                    <span className={styles.new}>Новое</span>
                  ) : (
                    ""
                  )}
                </div>
                <span className={styles.price}>{news.price} ₽</span>
              </div>
            </div>
            <div className={styles.right}>
              <button className={styles.button}>
                {news.type === "sales" && <span>Написать</span>}
                {news.type === "auctions" && <span>Участвовать</span>}
                {news.type === "exchanges" && <span>Предложить</span>}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
