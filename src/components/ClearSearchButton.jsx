import styles from "./ClearSearchButton.module.css";

const ClearSearchButton = ({ dispatch }) => {
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
