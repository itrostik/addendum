import styles from "./Sidebar.module.scss";
import Image from "next/image";
import userLoad from "/public/user-load.svg";
import logo from "/public/logo.svg";
import Link from "next/link";
import {
  ArrowRightFromLine,
  Gavel,
  LogOut,
  Megaphone,
  MessageCircle,
  Repeat2,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, status } = useSession();

  return (
    <div className={isOpen ? styles.wrapper : styles.wrapperClose}>
      <div className={isOpen ? styles.topOpen : styles.top}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt={"logo"} width={70} height={70} />
        </Link>
        <button
          className={styles.block}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ArrowRightFromLine
            size={30}
            className={isOpen ? styles.lucideClose : styles.lucideOpen}
          />
          {isOpen && <span className={styles.title}>Скрыть</span>}
        </button>
      </div>
      <div className={styles.center}>
        <Link href={"/advertisement"} className={styles.block}>
          <Megaphone size={30} className={styles.lucide} />
          {isOpen && <span className={styles.title}>Объявления</span>}
        </Link>
        <Link href={"/chat"} className={styles.block}>
          <MessageCircle size={30} className={styles.lucide} />
          {isOpen && <span className={styles.title}>Сообщения</span>}
        </Link>
        <Link href={"/auction"} className={styles.block}>
          <Gavel size={30} className={styles.lucide} />
          {isOpen && <span className={styles.title}>Аукционы</span>}
        </Link>
        <Link href={"/exchange"} className={styles.block}>
          <Repeat2 size={30} className={styles.lucide} />
          {isOpen && <span className={styles.title}>Обмены</span>}
        </Link>
      </div>
      <div className={styles.bottom}>
        {data && data.user?.image ? (
          <Link href={"/account"} className={styles.block}>
            <Image
              src={data.user.image}
              alt={"user"}
              width={30}
              height={30}
              className={styles.avatar}
            />
            {isOpen && <span className={styles.title}>{data.user.name}</span>}
          </Link>
        ) : (
          <Image
            src={userLoad}
            alt={"load"}
            width={40}
            height={40}
            className={styles.block + " " + styles.animation}
          />
        )}
        <Link href={"/"} className={styles.block}>
          <Settings size={30} className={styles.lucide} />
          {isOpen && <span className={styles.title}>Настройки</span>}
        </Link>
        <div className={styles.block} onClick={() => signOut()}>
          <LogOut size={30} className={styles.lucide} />
          {isOpen && <span className={styles.title}>Выйти</span>}
        </div>
      </div>
    </div>
  );
}
