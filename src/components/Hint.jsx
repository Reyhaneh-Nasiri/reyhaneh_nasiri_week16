import styles from "./Hint.module.css";

const Hint = ({ cities, search }) => {
  return (
    <p className={styles.hint}>
      {cities.find((city) => city.startsWith(search))}
    </p>
  );
};

export default Hint;
