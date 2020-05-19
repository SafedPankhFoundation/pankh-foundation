import React, { useState } from "react";
import SigninForm from "./SigninForm";
import SignupField from "./SignupField";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleEmailChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
}

const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value);
}

const handleUserLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password)
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