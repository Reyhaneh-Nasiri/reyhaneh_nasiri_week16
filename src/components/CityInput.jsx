import Cities from "../data/cities.json";
import ClearSearchButton from "./ClearSearchButton";
import Hint from "./Hint";
import styles from "./CityInput.module.css";

const CityInput = ({ search, dispatch }) => {
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
        {search && <Hint cities={Cities} search={search} />}
        {search && <ClearSearchButton dispatch={dispatch} />}
      </div>
    </>
  );
};

export default CityInput;
