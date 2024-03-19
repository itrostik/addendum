import styles from "./AuthForm.module.scss";
import { signIn } from "next-auth/react";
import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^[a-zA-Z0-9_.-]{5,}$/;

export default function AuthForm({
  setIsLoading,
}: {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

  async function sign(event: MouseEvent<HTMLButtonElement>) {
    setIsLoading(true);
    event.preventDefault();
    try {
      await signIn("credentials", {
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
        callbackUrl: "/",
      });
    } catch (e) {
      console.error(e);
    }
  }

  function checkCredentials() {
    if (emailRef.current && passwordRef.current) {
      if (
        emailRegex.test(emailRef.current.value) &&
        passwordRegex.test(passwordRef.current.value)
      ) {
        setIsActiveButton(true);
        return;
      }
    }
    setIsActiveButton(false);
  }

  return (
    <form className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        <input
          type="email"
          id={"email"}
          placeholder={"Почта"}
          className={styles.input}
          autoComplete={"off"}
          onChange={checkCredentials}
          ref={emailRef}
        />
      </label>
      <label htmlFor="password" className={styles.label}>
        <input
          type="password"
          id={"password"}
          placeholder={"Пароль"}
          className={styles.input}
          autoComplete={"off"}
          onChange={checkCredentials}
          ref={passwordRef}
        />
      </label>
      <span className={styles.info}>Минимум 5 символов.</span>
      {isActiveButton ? (
        <button
          className={styles.button + " " + styles.activeButton}
          onClick={(event: MouseEvent<HTMLButtonElement>) => sign(event)}
        >
          Далее
        </button>
      ) : (
        <button
          className={styles.button}
          onClick={(event) => event.preventDefault()}
        >
          Далее
        </button>
      )}
    </form>
  );
}
