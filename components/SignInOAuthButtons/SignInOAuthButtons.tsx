import { useSignIn } from "@clerk/nextjs";
import Image from "next/image";
import google from "../../public/google.svg";
import github from "../../public/github.svg";
import apple from "../../public/apple.svg";

import styles from "./SignInOAuthButtons.module.scss";

export const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }
  const signInWithGoogle = () =>
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });

  const signInWithGithub = () =>
    signIn.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });

  const signInWithApple = () =>
    signIn.authenticateWithRedirect({
      strategy: "oauth_apple",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });

  return (
    <div className={styles.buttons}>
      <button onClick={signInWithGoogle} className={styles.button}>
        <Image src={google} alt={"google"} />
      </button>
      <button onClick={signInWithGithub} className={styles.button}>
        <Image src={github} alt={"github"} />
      </button>
      <button onClick={signInWithApple} className={styles.button}>
        <Image src={apple} alt={"apple"} />
      </button>
    </div>
  );
};
