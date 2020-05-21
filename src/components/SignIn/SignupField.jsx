import React from "react";

const SignupField = () => {
  return (
      <div className="signup-field">
        <div className="right-green-container">
          {/* this div is needed to push the content float right */}
          <div className="left-fill">
          </div>
          <div className="right-signup-proposal">
          <h1>Don't have account yet?</h1>
          <p>Lets get you all set that can create on your first on boarding experience</p>
          <input className="signup-button" type="submit" value="Sign Up"/>
          </div>
        </div>
      </div>
  );
};

export default SignupField;