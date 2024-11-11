import React from "react";
import Signup from "../../components/Auth/Signup/Signup";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div>
      <h1>Signup to Your Account</h1>
      <Signup />
      <p>Already have an account?</p>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default SignupPage;
