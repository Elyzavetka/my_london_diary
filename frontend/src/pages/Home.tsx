import Feed from "../components/Feed";
import LocalTips from "../components/LocalTips/LocalTips";

export const Home = () => {
  return (
    <>
      <h1>My London Diary</h1>
      <div className="appContainer">
        <div className="feed">
          <Feed />
        </div>
        <div className="recommendations">
          <LocalTips />
        </div>
      </div>
    </>
  );
};
