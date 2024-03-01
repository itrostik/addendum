import styles from "./Games.module.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

import { getAllGames } from "../../utils/getAllGames";
import { GameDataType } from "../../types/GameDataType";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export type GamesProps = {
  width: number;
  height: number;
};

export default function Games({ width, height }: GamesProps) {
  const [countPage, setCountPage] = useState<number>(1);
  const [games, setGames] = useState<GameDataType[] | null>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countInWidth = Math.floor((width - 20) / 220);
    const countInHeight = Math.floor((height - 200) / 220);
    const count = countInWidth * countInHeight;
    setCount(count);
    console.log(countInWidth, countInHeight);
    if (games) console.log(games);
    const getAll = async () => {
      const games = await getAllGames(count);
      setGames(games);
    };
    if (width !== 0 && height !== 0) getAll();
  }, [width, height]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Список игр</h3>
      <div className={styles.games}>
        {games ? (
          games[countPage - 1].data.map((game) => (
            <div className={styles.game} key={game._id}>
              <Image
                src={game.image}
                alt={"game"}
                width={200}
                height={200}
                priority
                className={styles.gameImage}
              />
            </div>
          ))
        ) : (
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
        )}
        {games && (
          <div className={styles.pagination}>
            {countPage > 1 && (
              <ArrowLeft
                size={30}
                className={styles.arrow}
                onClick={() => setCountPage((prev) => prev - 1)}
              />
            )}
            {countPage > 1 && (
              <div
                className={styles.block}
                onClick={() => setCountPage((prev) => prev - 1)}
              >
                {countPage - 1}
              </div>
            )}
            <div className={styles.block + " " + styles.activeBlock}>
              {countPage}
            </div>
            {countPage < games?.length! && (
              <div
                className={styles.block}
                onClick={() => setCountPage((prev) => prev + 1)}
              >
                {countPage + 1}
              </div>
            )}
            {countPage < games?.length! && (
              <ArrowRight
                size={30}
                className={styles.arrow}
                onClick={() => setCountPage((prev) => prev + 1)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
