import { useReducer } from "react";
import Cities from "../data/cities.json";
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
        <p className={styles.citySearch__hint}>
          {search && Cities.find((city) => city.startsWith(search))}
        </p>
        {search && (
          <button
            className={styles.citySearch__clearBtn}
            onClick={() => dispatch({ type: "CLEAR_SEARCH" })}
          >
            &#10006;
          </button>
        )}
      </div>
    </>
  );
};

export default CityInput;
