import { useState } from "react";
import Cities from "../data/cities.json";
import styles from "./CityInput.module.css";
const CityInput = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div className={styles.citySearch}>
        <input
          type="text"
          className={styles.citySearch__input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="city"
        />
        <p className={styles.citySearch__hint}>
          {search && Cities.find((city) => city.startsWith(search))}
        </p>
        {search && (
          <button className={styles.citySearch__clearBtn} onClick={() => setSearch("")}>&#10006;</button>
        )}
      </div>
    </>
  );
};

export default CityInput;
