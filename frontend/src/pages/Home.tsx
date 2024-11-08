import React from "react";
import Feed from "../components/Feed";
import LocalTips from "../components/LocalTips/LocalTips";
import { useAuth } from "../context/AuthContext";
import styles from "./Home.module.css";
import Logout from "../components/Auth/Logout/Logout";

export const Home = () => {
  const { username } = useAuth();
  return (
    <>
      <Logout />
      <h1>My London Diary</h1>
      {username && <div className={styles.userName}>Hi, {username}</div>}
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
