import { useContext } from "react";

import styles from "./ClearSearchButton.module.css";
import { SearchContext } from "./context/SearchContext";

const ClearSearchButton = () => {
  const { dispatch } = useContext(SearchContext);

  return (
    <button
      className={styles.clearBtn}
      onClick={() => dispatch({ type: "CLEAR_SEARCH" })}
    >
      &#10006;
    </button>
  );
};

export default ClearSearchButton;
