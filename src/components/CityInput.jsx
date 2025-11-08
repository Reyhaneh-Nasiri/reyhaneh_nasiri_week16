import { useState } from "react";
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
        />
        <p className={styles.citySearch__hint}>New York</p>
      </div>
    </>
  );
};

export default CityInput;
