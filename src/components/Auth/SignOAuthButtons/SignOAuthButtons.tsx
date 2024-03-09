import Image from "next/image";
import google from "/public/google.svg";
import github from "/public/github.svg";

import styles from "./SignOAuthButtons.module.scss";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import AuthLoading from "@/components/Auth/AuthLoading/AuthLoading";

export const SignOAuthButtons = ({
  isHaveAccount,
}: {
  isHaveAccount: boolean;
}) => {
  const { signIn, isLoaded } = useSignIn();
  const { signUp } = useSignUp();
  if (!isLoaded) {
    return <AuthLoading />;
  }
  const signInWithGoogle = () => {
    localStorage.setItem("auth-error", "Такого аккаунта не существует");
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/error",
      redirectUrlComplete: "/",
    });
  };

  const signInWithGithub = () => {
    localStorage.setItem("auth-error", "Такого аккаунта не существует");
    signIn.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/auth/error",
      redirectUrlComplete: "/",
    });
  };

  const signUpWithGoogle = () => {
    localStorage.setItem("auth-error", "Такой аккаунт уже существует");
    signUp?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/error",
      redirectUrlComplete: "/",
    });
  };

  const signUpWithGithub = () => {
    localStorage.setItem("auth-error", "Такой аккаунт уже существует");
    signUp?.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/auth/error",
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className={styles.buttons}>
      <button
        onClick={isHaveAccount ? signInWithGoogle : signUpWithGoogle}
        className={styles.button}
      >
        <Image src={google} alt={"google"} />
      </button>
      <button
        onClick={isHaveAccount ? signInWithGithub : signUpWithGithub}
        className={styles.button}
      >
        <Image src={github} alt={"github"} />
      </button>
    </div>
  );
};
