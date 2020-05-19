import React from "react";
import fbIcon from "../../assets/fb.svg";
import twitterIcon from "../../assets/twitter.svg";
import instaIcon from "../../assets/insta.svg";

const SocialIcons = () => {
 
  return (
        <div className="sign-social-icons">
            <a href="#">
                <img src={fbIcon} alt="fb-logo" />
            </a>
            <a href="#">
                <img src={twitterIcon} alt="twitter-logo" />
            </a>
            <a href="#">
                <img src={instaIcon} alt="instagram-logo" />
            </a>
        </div>
  );
};

export default SocialIcons;