import React from "react";

const MainFooter = () => {
  return (
        <div className="main-footer-section">
            <div className="main-footer-column">
                <h4>RESOURCES</h4>
                <ul className="footer-links">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
            <div className="main-footer-column">
                <h4>ABOUT US</h4>
                <ul className="footer-links">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
            <div className="main-footer-column">
                <h4>CENTERS</h4>
                <ul className="footer-links">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </div>
  );
};

export default MainFooter;