import React from "react";
import Signup from "../../../components/Auth/Signup/Signup";
import { Link } from "react-router-dom";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div>
      <h1 className={styles.header}>Signup to Your Account</h1>
      <Signup />
      <p className={styles.textHint}>Already have an account?</p>
      <Link to="/login" className={styles.greenLink}>
        Log in
      </Link>
    </div>
  );
};

export default SignupPage;
