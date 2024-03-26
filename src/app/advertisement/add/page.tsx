"use client";
import styles from "./page.module.scss";
import Search from "@/components/UI/Search/Search";
import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/Global/Sidebar/Sidebar";
import Pagination from "@/components/UI/Pagination/Pagination";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "@/hooks/useQuery";
import { useUser } from "@/hooks/useUser";
import GamesList from "@/components/GamesList/GamesList";
import GameSkeleton from "@/components/GameSkeleton/GameSkeleton";
import useDebounce from "@/hooks/useDebounce";

export default function Page() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [countPage, setCountPage] = useState<number>(1);

  const debounceValue = useDebounce(searchValue, 500);

  const { games, isLoading } = useQuery(20, countPage);
  const ref = useRef<HTMLDivElement>(null);

  const user = useUser();

  useEffect(() => {
    setCountPage(1);
  }, [debounceValue]);

  return (
    <div className={styles.wrapper}>
      <Sidebar user={user} />
      <div className={styles.content} ref={ref}>
        <h1 className={styles.heading}>Объявление о продаже</h1>
        <h3 className={styles.heading2}>Выберите игру</h3>
        <div className={styles.search}>
          <Search setValue={setSearchValue} />
        </div>
        {!isLoading && games && (
          <div className={styles.games}>
            <GamesList games={games}></GamesList>
          </div>
        )}
        {isLoading && (
          <div className={styles.skeleton}>
            {[...new Array(20)].map((_, index) => (
              <GameSkeleton key={index} />
            ))}
          </div>
        )}
        {games && games.length > 1 && (
          <Pagination
            countPage={countPage}
            setCountPage={setCountPage}
            itemLength={games.length!}
          />
        )}
      </div>
    </div>
  );
}
