import styles from "./NewsList.module.scss";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../../../../firebase/firestore";
import { NewsType } from "@/types/newsType";
import NewsItem from "@/components/News/NewsItem/NewsItem";
import NewsSkeleton from "@/components/News/NewsSkeleton/NewsSkeleton";

export default function NewsList() {
  const [newsList, setNewsList] = useState<NewsType[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "news"), (doc) => {
      const news: NewsType[] = [];
      doc.docs.map((doc) => news.push(doc.data() as NewsType));
      setNewsList([...news]);
    });
    return () => unsub();
  });

  return (
    <div className={styles.wrapper}>
      {newsList.length !== 0
        ? newsList.map((news) => (
            <NewsItem news={news} key={news.advertisement_id} />
          ))
        : [...new Array(3)].map(() => <NewsSkeleton />)}
    </div>
  );
}
