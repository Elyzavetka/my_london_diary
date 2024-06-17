import styles from "./Recommendations.module.css";
import Geolocation from "../Geolocation";

const Recomendations = () => {
  return (
    <div className={styles.recommendationsContainer}>
      <h2>Recommendations</h2>
      <Geolocation />
    </div>
  );
};

export default Recomendations;
