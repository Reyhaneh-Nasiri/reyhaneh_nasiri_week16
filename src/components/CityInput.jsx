import styles from "./CityInput.module.css"
const CityInput = () => {
  return (
    <>
      <div className={styles.citySearch}>
        <input type="text" className={styles.citySearch__input} />
        <p className={styles.citySearch__hint}>New York</p>
      </div>
    </>
  );
};

export default CityInput;
