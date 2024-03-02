import styles from "./Pagination.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export type PaginationProps = {
  countPage: number;
  setCountPage: React.Dispatch<React.SetStateAction<number>>;
  itemLength: number;
};

export default function Pagination({
  countPage,
  setCountPage,
  itemLength,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      {countPage > 1 && (
        <ArrowLeft
          size={30}
          className={styles.arrow}
          onClick={() => setCountPage((prev) => prev - 1)}
        />
      )}
      {countPage > 1 && (
        <div
          className={styles.block}
          onClick={() => setCountPage((prev) => prev - 1)}
        >
          {countPage - 1}
        </div>
      )}
      <div className={styles.block + " " + styles.activeBlock}>{countPage}</div>
      {countPage < itemLength! && (
        <div
          className={styles.block}
          onClick={() => setCountPage((prev) => prev + 1)}
        >
          {countPage + 1}
        </div>
      )}
      {countPage < itemLength! && (
        <ArrowRight
          size={30}
          className={styles.arrow}
          onClick={() => setCountPage((prev) => prev + 1)}
        />
      )}
    </div>
  );
}
