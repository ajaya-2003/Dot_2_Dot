import React from "react";
import "./MainFooter.css";
import MapConponent from "./MapConponent";
import FB from "../../images/facebook-logo.png";
import insta from "../../images//instagram-logo.png";
import Twitter from "../../images/twitter-logo.png";
import YouTube from "../../images/youtube-logo.png";
import LinkedIn from "../../images/LinkedIn-logo.png";

const NewFooter = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <MapConponent />
      </div>
      <div className="footer-middle">
        <div className="footer-midle-box-1">
          <h4 style={{ fontWeight: "600" }}>Contact Us</h4>
          <div className="footer-middle-box-items">
            <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
            <label
              onClick={() =>
                handleRedirect("https://maps.app.goo.gl/54gomMLjRKjD2pNx9")
              }
            >
              {" "}
              Dot 2 Dot Events, 3rd cross, main road, NC Layout, Andrahalli,
              Lingadeeranhalli, Bengaluru, Karnataka 560091, India
            </label>
          </div>
          <div className="footer-middle-box-items">
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            <label onClick={() => handleRedirect("mailto:dot2dot@gmail.com")}>
              {" "}
              dot2dotevents@gmail.com{" "}
            </label>
          </div>
          <div className="footer-middle-box-items">
            <i className="fa fa-phone" aria-hidden="true"></i>{" "}
            <label onClick={() => handleRedirect("tel:9741546178")}>
              {" "}
              +91&nbsp;9876543210{" "}
            </label>
          </div>
        </div>
        <div className="footer-midle-box"></div>
        <div className="footer-midle-box"></div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social-media-icons">
          <img src={FB} alt="Facebook" />
          <img src={insta} alt="instagram" />
          <img src={YouTube} alt="You-Tube" />
          <img src={Twitter} alt="Twitter" />
          <img src={LinkedIn} alt="LinkedIn" />
        </div>
        <div className="footer-copy-write">
          &copy;{new Date().getFullYear()} Dot-2-Dot Events. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
