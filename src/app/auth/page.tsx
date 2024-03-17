"use client";
import { SignOAuthButtons } from "@/components/Auth/SignOAuthButtons/SignOAuthButtons";
import styles from "./page.module.scss";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/Auth/AuthForm/AuthForm";
export default function Page() {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Аутентификация</h1>
        <AuthForm />
        <span>или</span>
        <SignOAuthButtons />
      </div>
    </div>
  );
}
