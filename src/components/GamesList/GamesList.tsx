import styles from "./GamesList.module.scss";
import { GameType } from "@/types/gameType";
import Image from "next/image";
import Link from "next/link";

export default function GamesList({ games }: { games: GameType[] }) {
  return (
    <div className={styles.wrapper}>
      {games.map((game) => (
        <Link href={""} key={game.image} className={styles.game}>
          <Image
            src={game.image}
            alt={"game"}
            width={200}
            height={200}
            className={styles.image}
            loading={"eager"}
            priority
          />
        </Link>
      ))}
    </div>
  );
}
