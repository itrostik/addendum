"use client";
import { limit, query } from "firebase/firestore";
import { db } from "../../firebase/firestore";
import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  getDocs,
  startAfter,
} from "@firebase/firestore";
import { GameType } from "@/types/gameType";

type AllGames = {
  page: number;
  games: GameType[];
};
export function useQuery(limitNumber: number = 10, countPage: number = 1) {
  const [lastVisible, setLastVisible] = useState<DocumentData>();
  const [result, setResult] = useState<GameType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [allGames, setAllGames] = useState<AllGames[]>([]);

  useEffect(() => {
    const getGames = async () => {
      setIsLoading(true);
      if (allGames[countPage - 1]) {
        setIsLoading(false);
        return;
      }
      const result: GameType[] = [];
      let documents;
      let next;

      if (!lastVisible) {
        next = query(collection(db, "games"), limit(limitNumber));
      } else {
        next = query(
          collection(db, "games"),
          startAfter(lastVisible),
          limit(limitNumber),
        );
      }

      documents = await getDocs(next);
      documents.docs.map((doc) => result.push(doc.data() as GameType));

      let last = documents.docs[documents.docs.length - 1];
      setLastVisible(last);
      setResult([...result]);
      setAllGames((prev) => {
        const buffer = [...prev];
        buffer?.push({
          page: countPage,
          games: result,
        });
        return buffer;
      });
      setIsLoading(false);
    };
    getGames();
  }, [limitNumber, countPage]);

  return {
    games: allGames[countPage - 1] ? allGames[countPage - 1].games : [],
    isLoading,
  };
}
