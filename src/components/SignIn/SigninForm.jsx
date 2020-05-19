import React from "react";

const SigninForm = () => {
  return (
      <div className="signin-form">
        <div className="left-container">
          <form action="/#" method="post">
            <h1>Sign In to your Account</h1>
            <h3>Login to your account with UserId & Password</h3>
            <input type="text" name="email" placeholder="Email" /><br></br>
            <input type="password" name="password" placeholder="Password" /><br></br>
            <div className="password-options">
              <div>
                <input type="checkbox" id="remember-me" name="remember" value="remember" />
                <label for="remember-me">Remember Me</label>
              </div>
              <div>
                <span>Forgot password</span>
              </div>
            </div>
            <input className="signin-button" type="submit" value="Sign In"/>
            <p>Social icons</p>
          </form>
        </div>
      </div>
  );
};

export default SigninForm;