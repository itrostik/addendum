import styles from "./Filter.module.scss";
import { SlidersHorizontal } from "lucide-react";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { memo, useState } from "react";
import Radio from "../../UI/Radio/Radio";
import { PRICE } from "@/constants/price";
import { TYPES_PRODUCT } from "@/constants/typesProduct";
import Search from "@/components/UI/Search/Search";
import { GAMES_GENRES } from "@/constants/genres";

export const Filter = memo(() => {
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
            {TYPES_PRODUCT.map((type, id) => (
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
            {GAMES_GENRES?.map((genre, id) => (
              <Checkbox
                key={id}
                value={genre}
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
            {PRICE.map((item, id) => (
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
});
