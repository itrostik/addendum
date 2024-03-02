import styles from "./Search.module.scss";
import { SearchIcon } from "lucide-react";
import React, { ChangeEvent } from "react";

export type SearchProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function Search({ setValue }: SearchProps) {
  return (
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <SearchIcon size={20} className={styles.searchIcon} id={"searchIcon"} />
        <input
          type="text"
          id={"search"}
          placeholder={"Введите название"}
          className={styles.input}
          onInput={(event: ChangeEvent<HTMLInputElement>) =>
            setValue(event.target.value)
          }
        />
      </label>
    </div>
  );
}
