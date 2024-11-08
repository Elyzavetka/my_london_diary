import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../api/auth";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logoutButton">
      Logout
    </button>
  );
};

export default Logout;
