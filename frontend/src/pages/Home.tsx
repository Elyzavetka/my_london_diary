import Feed from "../components/Feed";
import Recomendations from "../components/Recommendations/Recommendations";

export const Home = () => {
  return (
    <>
      <h1>My London Diary</h1>
      <div className="appContainer">
        <div className="feed">
          <Feed />
        </div>
        <div className="recommendations">
          <Recomendations />
        </div>
      </div>
    </>
  );
};
