import React, { useState } from "react";
import SigninForm from "./SigninForm";
import SignupField from "./SignupField";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleEmailChange = (e) => {
    setEmail(e.target.value);
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
}

const handleUserLogin = (e) => {
    e.preventDefault();
    // handle user athentification
}

const loginInfo = {
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  handleUserLogin
}

  return (
    <div className="sign-in">
      <SigninForm loginInfo={loginInfo}/>
      <SignupField />
    </div>
  );
};

export default SignIn;