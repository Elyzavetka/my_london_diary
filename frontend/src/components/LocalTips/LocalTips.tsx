import styles from "./LocalTips.module.css";
import Geolocation from "../Geolocation";
import LocalTip from "./LocalTip/LocalTip";

const Recomendations = () => {
  return (
    <div className={styles.localTipsContainer}>
      <p className={styles.localTipsHeader}>📍Local Tips</p>
      <Geolocation />
      <LocalTip />
    </div>
  );
};

export default Recomendations;
