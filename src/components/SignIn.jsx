import React from "react";
import "../"

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="signin-form">
        <div className="left-container">
          <form>
            <h1>Sign In to your Account</h1>
            <h3>Login to your account with UserId & Password</h3>
            <input type="text" name="email" placeholder="Email" /><br></br>
            <input type="password" name="password" placeholder="Password" /><br></br>
            <div className="password-options">
              <div>
                <input type="checkbox" id="remember-me" name="remember" value="remember" />
                <label for="remember-me"> Remember Me</label>
              </div>
              <div>
                <span>Forgot password</span>
              </div>
            </div>
            <input type="submit" value="Sign In"/>
            <p>Social icons</p>
          </form>
        </div>
      </div>
      <div className="signup-field">
        {/* this div is needed to push the content float right */}
        <div className="left-fill"></div>
        <div className="right-container">
          <h1>Don't have account yet?</h1>
          <p>Lets get you all set that can create on your first on boarding experience</p>
          <input type="submit" value="Sign Up"/>
        </div>
      </div>
    </div>
  );
};

export default SignIn;