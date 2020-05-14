import React from "react";
import fbIcon from "../../assets/fb.svg";
import twitterIcon from "../../assets/twitter.svg";
import instaIcon from "../../assets/insta.svg";
import ytIcon from "../../assets/yt.svg";

const SocialFooter = () => {
  return (
    <div className="social-section">
      <h4>FOLLOW</h4>
      <ul className="footer-links">
        <li>
          <a href="#">
            <img src={fbIcon} alt="fb-logo" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterIcon} alt="twitter-logo" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instaIcon} alt="instagram-logo" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={ytIcon} alt="youtube-logo" />
            <span>YouTube</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialFooter;
