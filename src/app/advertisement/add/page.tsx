"use client";
import styles from "./page.module.scss";
import Search from "../../../components/Search/Search";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Loading from "../../../components/Loading/Loading";
import Games from "../../../components/Games/Games";
import { getAllGames } from "../../../utils/games/getAllGames";
import { GameDataType } from "../../../types/GameDataType";
import { getByNameGames } from "../../../utils/games/getByNameGames";
import Skeleton from "react-loading-skeleton";
import Pagination from "../../../components/Pagination/Pagination";
import "react-loading-skeleton/dist/skeleton.css";
import ChosenGame from "../../../components/ChosenGame/ChosenGame";

export default function Page() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [userId, setUserId] = useState<Id<"users">>();
  const [games, setGames] = useState<GameDataType[] | null>(null);
  const [countPage, setCountPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const [chosenGame, setChosenGame] = useState<Id<"games"> | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const userMutation = useMutation(api.users.store);

  const { isAuthenticated, isLoading } = useConvexAuth();

  async function getAll() {
    const games = await getAllGames(count);
    setGames(games);
  }

  async function getByName(searchValue: string) {
    const games = await getByNameGames(searchValue, count);
    setGames(games);
  }

  async function getCount() {
    const width = ref?.current?.clientWidth;
    const height = ref?.current?.clientHeight;
    const countInWidth = width ? Math.floor((width - 20) / 220) : 0;
    const countInHeight = height ? Math.floor((height - 200) / 220) : 0;
    const count = countInWidth * countInHeight;
    setCount(count);
  }

  useEffect(() => {
    const getUserId = async () => {
      setUserId(await userMutation());
    };
    if (isAuthenticated) {
      getUserId();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    getCount();
    if (count > 0) getAll();
  }, [ref, ref.current, userId]);

  useEffect(() => {
    getCount();
    if (searchValue) getByName(searchValue);
    else if (count > 0 && !searchValue) getAll();
  }, [searchValue]);

  console.log(games);

  return (
    <>
      {!isLoading && userId ? (
        <div className={styles.wrapper}>
          <Sidebar user_id={userId} />
          {!chosenGame ? (
            <div className={styles.content} ref={ref}>
              <h1 className={styles.heading}>Объявление о продаже</h1>
              <h3 className={styles.heading2}>Выберите игру</h3>
              <div className={styles.search}>
                <Search setValue={setSearchValue} />
              </div>
              {games ? (
                <Games
                  games={games[countPage - 1]}
                  setChosenGame={setChosenGame}
                />
              ) : (
                <>
                  <h3 className={styles.title}>Список игр</h3>
                  <div className={styles.games}>
                    {[...new Array(count)].map((_) => (
                      <Skeleton
                        baseColor={"#eeeeee"}
                        highlightColor={"#ffffff"}
                        width={200}
                        height={200}
                        borderRadius={5}
                        duration={1.5}
                      />
                    ))}
                  </div>
                </>
              )}
              {games && games.length > 1 && (
                <Pagination
                  countPage={countPage}
                  setCountPage={setCountPage}
                  itemLength={games.length!}
                />
              )}
            </div>
          ) : (
            <ChosenGame game_id={chosenGame} />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
