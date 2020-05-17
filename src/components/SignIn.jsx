import React from "react";
import "../"

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="signin-form">
        <form>
          <h1>Sign In to your Account</h1>
          <h3>Login to your account with UserId & Password</h3>
          <input type="text" name="email" placeholder="Email" /><br></br>
          <input type="password" name="password" placeholder="Password" /><br></br>
          <input type="checkbox" id="remember-me" name="remember" value="remember" />
          <label for="remember-me"> Remember Me</label>
          <span>Forgot password</span><br></br>
          <input type="submit" value="Sign In"/>
          <p>Social icons</p>
        </form>
      </div>
      <div className="signup-field">
        <h1>Don't have account yet?</h1>
        <p>Lets get you all set that can create on your first on boarding experience</p>
        <input type="submit" value="Sign Up"/>
      </div>
    </div>
  );
};

export default SignIn;