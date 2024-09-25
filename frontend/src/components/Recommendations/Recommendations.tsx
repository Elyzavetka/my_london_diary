import styles from "./Recommendations.module.css";
import Geolocation from "../Geolocation";
import Recommendation from "./Recommendation/Recommendation";

const Recomendations = () => {
  return (
    <div className={styles.recommendationsContainer}>
      <p className={styles.recommendationsHeader}>📍Local Tips</p>
      <Geolocation />
      <Recommendation />
    </div>
  );
};

export default Recomendations;
