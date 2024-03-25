"use client";
import { SignOAuthButtons } from "@/components/Auth/SignOAuthButtons/SignOAuthButtons";
import styles from "./page.module.scss";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Global/Loading/Loading";

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status]);

  return (
    <>
      {!isLoading ? (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <SignOAuthButtons setIsLoading={setIsLoading} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
