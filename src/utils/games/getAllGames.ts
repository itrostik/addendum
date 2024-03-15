import { collection, DocumentData, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/firestore";

export async function getAllGames() {
  const querySnapshot = await getDocs(collection(db, "games"));
  const games: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    games.push(doc.data());
  });
  return games;
}
