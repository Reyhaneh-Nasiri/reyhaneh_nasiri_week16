import Cities from "../data/cities.json";
import { useReducer } from "react";
import ClearSearchButton from "./ClearSearchButton";
import Hint from "./Hint";
import styles from "./CityInput.module.css";

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
        {search && <Hint cities={Cities} search={search} />}
        {search && <ClearSearchButton dispatch={dispatch} />}
      </div>
    </>
  );
};

export default CityInput;
