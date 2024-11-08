import React, { useState } from "react";
import { login as loginService } from "../../../api/auth";
import styles from "./Login.module.css";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token, username } = await loginService(email, password);

      login(token, username);
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
