import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/Auth/Login/Login";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Login to Your Account</h1>
      <Login />
      <p>Don't have an account?</p>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default LoginPage;
