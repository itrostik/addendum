import Image from "next/image";
import google from "/public/google.svg";
import github from "/public/github.svg";

import styles from "./SignOAuthButtons.module.scss";
import { signIn } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

export const SignOAuthButtons = ({
  setIsLoading,
}: {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.buttons}>
      <button
        onClick={() => {
          setIsLoading(true);
          signIn("google", {
            callbackUrl: "/",
          });
        }}
        className={styles.button}
      >
        <Image src={google} alt={"google"} />
      </button>
      <button
        onClick={() => {
          setIsLoading(true);
          signIn("github", {
            callbackUrl: "/",
          });
        }}
        className={styles.button}
      >
        <Image src={github} alt={"github"} />
      </button>
    </div>
  );
};
