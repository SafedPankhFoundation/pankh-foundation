import React from "react";
const Navbar = () => {
  return (
    <div className="Navbar">
  
      <input className="toggler" type="checkbox" id="toggler" />
      <label className="hamburger" htmlFor="toggler">
        <div></div> 
      </label>
      <ul className="nav">
        <span className="brand">SPF </span>
        <li className="nav_item">Our Work</li>
        <li className="nav_item">Join Us</li>
        <li className="space"></li>
        <li className="nav_item">Blog</li>
        <li className="nav_item">About Us</li>
        <li className="nav_others">
          <button className="btn bg-green">Subscribe</button>
          <button className="btn bg-red">Donate</button>
        </li>
      </ul>
    
    </div>
  );
};
//nav_others
export default Navbar;
