import styles from "./Sidebar.module.scss";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import userLoad from "../../../public/user-load.svg";
export default function Sidebar({ user_id }: { user_id: Id<"users"> }) {
  const user = useQuery(api.users.getById, { user_id });
  return (
    <div className={styles.wrapper}>
      {user ? (
        <Image
          src={user.avatar}
          alt={"user"}
          width={50}
          height={50}
          className={styles.logo}
        />
      ) : (
        <Image
          src={userLoad}
          alt={"load"}
          width={50}
          height={50}
          className={styles.animation}
        />
      )}
    </div>
  );
}
