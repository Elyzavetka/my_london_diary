import React from "react";
import Feed from "../components/Feed";
import LocalTips from "../components/LocalTips/LocalTips";
import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { username } = useAuth();
  return (
    <>
      <h1>My London Diary</h1>
      {username && <h2>Hello, {username}</h2>}
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
