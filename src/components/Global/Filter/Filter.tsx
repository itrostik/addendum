import styles from "./Filter.module.scss";
import { SlidersHorizontal } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Checkbox from "../UI/Checkbox/Checkbox";
import React, { useState } from "react";
import Radio from "../UI/Radio/Radio";
import { price } from "@/constants/price";
import { typesProduct } from "@/constants/typesProduct";
import Search from "../Search/Search";

export default function Filter() {
  const genres = useQuery(api.genres.getAll);
  const [activeCheckbox, setActiveCheckbox] = useState<string[]>([]);
  const [activeRadio, setActiveRadio] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h1 className={styles.head}>Фильтры</h1>
        <SlidersHorizontal />
      </div>
      <div className={styles.info}>
        <div className={styles.search}>
          <h3 className={styles.title}>Поиск</h3>
          <Search setValue={setSearchValue} />
        </div>
        <div className={styles.types}>
          <h3 className={styles.title}>Тип объявления</h3>
          <div className={styles.typesBlock}>
            {typesProduct?.map((type, id) => (
              <Checkbox
                key={id}
                value={type}
                id={id}
                activeCheckbox={activeCheckbox}
                setActiveCheckbox={setActiveCheckbox}
              />
            ))}
          </div>
        </div>
        <div className={styles.genres}>
          <h3 className={styles.title}>Жанр</h3>
          <div className={styles.genresBlock}>
            {genres?.map((genre, id) => (
              <Checkbox
                key={id}
                value={genre.name}
                id={id}
                activeCheckbox={activeCheckbox}
                setActiveCheckbox={setActiveCheckbox}
              />
            ))}
          </div>
        </div>
        <div className={styles.prices}>
          <h3 className={styles.title}>Цена</h3>
          <div className={styles.pricesBlock}>
            {price.map((item, id) => (
              <Radio
                key={id}
                id={`${id}`}
                value={item}
                name={"price"}
                activeRadio={activeRadio}
                setActiveRadio={setActiveRadio}
              />
            ))}
          </div>
        </div>
        <button className={styles.button}>Применить</button>
      </div>
    </div>
  );
}