import styles from "./Profile.module.scss";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import star from "/public/star.svg";
import { Pencil } from "lucide-react";
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.name}>{user.name ? user.name : user.email}</div>
        <div className={styles.review}>
          <span>{user.review ? user.review : "Нет отзывов"}</span>
          <Image src={star} alt={"star"} width={20} height={20} />
        </div>
      </div>
      <span className={styles.description}>{user.description}</span>
      <Image
        src={user.avatar}
        alt={"avatar"}
        width={400}
        height={400}
        priority
        className={styles.logo}
      />
      <span className={styles.title}>Любимые жанры</span>
      <div className={styles.genres}>
        {user.like_genres.length > 0 ? (
          user.like_genres.map((genre) => (
            <div key={genre} className={styles.genre}>
              {genre}
            </div>
          ))
        ) : (
          <span className={styles.description}>Нет любимых жанров</span>
        )}
      </div>
      {isAuthor ? (
        <button className={styles.edit}>
          <Pencil size={20} color={"#ffffff"} />
          <span>Редактировать</span>
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
}
