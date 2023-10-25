import React from "react";
// import "./NewFooter.css";
import "./MainFooter.css";
import MapConponent from "./MapConponent";
import FB from '../../images/facebook-logo.png'
import insta from '../../images//instagram-logo.png'
import Twitter from '../../images/twitter-logo.png'
import YouTube from '../../images/youtube-logo.png'
import LinkedIn from '../../images/LinkedIn-logo.png'


const NewFooter = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <MapConponent />
      </div>
      <div className="footer-middle">
        <div className="footer-midle-box"></div>
        <div className="footer-midle-box"></div>
        <div className="footer-midle-box"></div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social-media-icons">
          <img src={insta} alt="instagram" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={FB} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={YouTube} alt="You-Tube" />
        </div>
        <div className="footer-copy-write">
          &copy; {new Date().getFullYear()} Dot-2-Dot Events. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
