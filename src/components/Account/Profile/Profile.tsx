import styles from "./Profile.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import star from "/public/star.svg";
import { Pencil } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { DEFAULT_USER_AVATAR } from "@/constants/defaultUserAvatar";

export default function Profile({ userId }: { userId: string }) {
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const user = useUser();
  useEffect(() => {
    const getUser = async () => {
      if (userId === user?.id) setIsAuthor(true);
    };
    getUser();
  }, [user?.id]);
  console.log(user);
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        {user && (
          <div className={styles.name}>
            {user.name ? user.name : user.email}
          </div>
        )}
        <div className={styles.review}>
          {/*<span>{user.review ? user.review : "Нет отзывов"}</span>*/}
          <Image src={star} alt={"star"} width={20} height={20} />
        </div>
      </div>
      <span className={styles.description}>{user && user.description}</span>
      {user && (
        <Image
          src={user.avatar ? user.avatar : DEFAULT_USER_AVATAR}
          alt={"avatar"}
          width={400}
          height={400}
          priority
          className={styles.logo}
        />
      )}
      <span className={styles.title}>Любимые жанры</span>
      <div className={styles.genres}>
        {user && user.like_genres.length > 0 ? (
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
