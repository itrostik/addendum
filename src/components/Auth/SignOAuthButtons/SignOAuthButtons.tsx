import Image from "next/image";
import google from "/public/google.svg";
import github from "/public/github.svg";

import styles from "./SignOAuthButtons.module.scss";
import { getProviders, signIn } from "next-auth/react";
import { useEffect } from "react";

export const SignOAuthButtons = () => {
  useEffect(() => {
    const getProv = async () => {
      console.log(await getProviders());
    };
    getProv();
  }, []);
  return (
    <div className={styles.buttons}>
      <button onClick={() => signIn("google")} className={styles.button}>
        <Image src={google} alt={"google"} />
      </button>
      <button onClick={() => signIn("github")} className={styles.button}>
        <Image src={github} alt={"github"} />
      </button>
    </div>
  );
};
