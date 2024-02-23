import styles from "./Profile.module.scss";
import { Doc } from "../../convex/_generated/dataModel";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";

export default function Profile({ user }: { user: Doc<"users"> }) {
  const { isAuthenticated } = useConvexAuth();
  const userMutation = useMutation(api.users.store);
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  useEffect(() => {
    const getUser = async () => {
      const userId = await userMutation();
      if (userId === user._id) setIsAuthor(true);
    };
    if (isAuthenticated) {
      getUser();
    }
  }, [isAuthenticated, user._id]);

  return <div className={styles.wrapper}>52</div>;
}
