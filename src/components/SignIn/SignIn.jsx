import React from "react";
import SigninForm from "./SigninForm";
import SignupField from "./SignupField";

const SignIn = () => {
  return (
    <div className="sign-in">
      <SigninForm />
      <SignupField />
    </div>
  );
};

export default SignIn;