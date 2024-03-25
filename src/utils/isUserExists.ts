import {
  collection,
  query,
  where,
  getDocs,
  and,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../../firebase/firestore";
import { UserType } from "@/types/userType";
export async function isUserExists(email: string): Promise<boolean> {
  const docRef = doc(db, "users", email);
  const user = await getDoc(docRef);
  return !!user.exists();
}
