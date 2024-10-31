import styles from "./LocalTip.module.css";

const LocalTip = () => {
  return (
    <>
      <h1 className={styles.localTipHeader}>
        <span className={styles.fontStyleFranklin}>📍Local </span>
        <span>Gems:</span>
      </h1>
    </>
  );
};

export default LocalTip;
