import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // For FontAwesome
import "./NewFooter.css";



const NewFooter = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-content">
            <div className="footer-logo">
              <h1>Dot_2_Dot Events</h1>
              <p>Your Event Planning Partner</p>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon icon="phone" />
              <p>Contact us at: contact@email.com</p>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon icon="envelope" />
              <p>Email: example@email.com</p>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon icon="map-marker" />
              <p>Location: 123 Main St, City, Country</p>
            </div>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/">Home</a>
              <div className="my-4"></div>
              <a href="/about">About</a>
              <div className="my-4"></div>          
              <a href="/services">Services</a>
              <div className="my-4"></div>
              <a href="/contact">Contact</a>
              {/* Add more links as needed */}
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-content">
            <div className="footer-links">
             <a href="/about">About Us</a>
             <div className="my-4"></div>
             <a href="/contact">Contact Us</a>
             <div className="my-4"></div>
               <a href="/privacy-policy">Privacy Policy</a>

              {/* Add more links as needed */}
            </div>
          </div>
        </div>
      </div>

      <div className="official-footer">
        <div className="official-content">
          <div className="footer-links">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>

      <div className="copyright ">
      
        &copy; {new Date().getFullYear()} Dot_2_Dot Events. All rights reserved.
      </div>
    </footer>
  );
};

export default NewFooter;
