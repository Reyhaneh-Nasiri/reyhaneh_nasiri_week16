import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";

import styles from "./Hint.module.css";

const Hint = () => {
  const { search, cities } = useContext(SearchContext);
  return (
    <p className={styles.hint}>
      {cities.find((city) => city.startsWith(search))}
    </p>
  );
};

export default Hint;
