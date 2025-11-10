import ClearSearchButton from "./ClearSearchButton";
import Hint from "./Hint";
import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";

import styles from "./CityInput.module.css";

const CityInput = () => {
  const { search, dispatch } = useContext(SearchContext);
  return (
    <>
      <div className={styles.citySearch}>
        <input
          type="text"
          className={styles.citySearch__input}
          value={search}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SEARCH", payload: e.target.value })
          }
          placeholder="city"
        />
        {search && <Hint />}
        {search && <ClearSearchButton />}
      </div>
    </>
  );
};

export default CityInput;
