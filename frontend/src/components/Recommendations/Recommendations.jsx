import styles from "./Recommendations.module.css";
import Geolocation from "../Geolocation";

const Recomendations = () => {
  return (
    <div className={styles.recommendationsContainer}>
      <p className={styles.recommendationsHeader}>📍Local Tips</p>
      <Geolocation />
    </div>
  );
};

export default Recomendations;
