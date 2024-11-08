import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../../api/auth";
import styles from "./Logout.module.css";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className={styles.logoutButton}>
      <FontAwesomeIcon icon={faRightFromBracket} /> Logout
    </button>
  );
};

export default Logout;
