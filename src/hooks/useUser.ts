import { useSession } from "next-auth/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firestore";
import { UserType } from "@/types/userType";
import { useEffect, useState } from "react";

export function useUser() {
  const { data } = useSession();
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const getUser = async () => {
      if (data?.user?.email) {
        const docRef = doc(db, "users", data.user.email);
        const user = await getDoc(docRef);
        if (user.exists()) {
          setUser(user.data() as UserType);
        }
      }
    };
    if (data?.user?.email) getUser();
  }, [data?.user?.email]);

  return user;
}
