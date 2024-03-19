import { collection, query, where, getDocs, and } from "firebase/firestore";

import { db } from "../../firebase/firestore";
import { UserType } from "@/types/userType";
export async function isUserExists(
  email: string,
  provider: string,
): Promise<UserType | null> {
  const q = query(
    collection(db, "users"),
    and(where("email", "==", email), where("provider", "==", provider)),
  );

  const querySnapshot = await getDocs(q);

  let user: UserType | undefined;

  querySnapshot.forEach((doc) => (user = doc.data() as UserType));

  if (!user) return null;

  return user;
}
