import { useReducer } from "react";
import Cities from "../data/cities.json";
import styles from "./CityInput.module.css";
import ClearSearchButton from "./ClearSearchButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return action.payload;
    case "CLEAR_SEARCH":
      return "";
    default:
      throw new Error("Invalid Action");
  }
};
const CityInput = () => {
  const [search, dispatch] = useReducer(reducer, "");
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
        <p className={styles.citySearch__hint}>
          {search && Cities.find((city) => city.startsWith(search))}
        </p>
        {search && <ClearSearchButton dispatch={dispatch} />}
      </div>
    </>
  );
};

export default CityInput;
