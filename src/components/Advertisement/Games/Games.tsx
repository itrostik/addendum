import styles from "./Games.module.scss";

import Image from "next/image";
import { GameDataType } from "@/types/GameDataType";
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import Link from "next/link";

export type GamesProps = {
  games: GameDataType;
};

export default function Games({ games }: GamesProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Список игр</h3>
      <div className={styles.wrapperGames}>
        {games && games.data ? (
          <div className={styles.games}>
            {games.data.map((game) => (
              <Link
                href={`/advertisement/add/${game._id}`}
                className={styles.game}
                key={game._id}
              >
                <Image
                  src={game.image}
                  alt={"game"}
                  width={200}
                  height={200}
                  priority
                  className={styles.gameImage}
                />
              </Link>
            ))}
          </div>
        ) : (
          <span>Поиск не дал результатов. Возможно такой игры просто нет</span>
        )}
      </div>
    </div>
  );
}
