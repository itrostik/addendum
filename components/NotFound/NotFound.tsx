import styles from "./NotFound.module.scss";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt={"logo"} width={100} height={100} />
      <span className={styles.text}>Страница не найдена 😔</span>
      <Link href={"/"} className={styles.link}>
        <button className={styles.button}>Вернуться на главную</button>
      </Link>
    </div>
  );
}
