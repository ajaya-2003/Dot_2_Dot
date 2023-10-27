import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Whatsapplogo from "./images/whatsapplogo.png";
import NewFooter from "./components/Footer/NewFooter";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time. Replace this with your actual loading logic.

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bakground-layer">
      <div className="absolute-div">
        <img
          src={Whatsapplogo}
          onClick={() => (window.location.href = "https://wa.me/919741546178")}
          alt="whatsapp"
        />
      </div>
      <div className="main-page">
        <video autoPlay loop muted className="background-video">
          <source
            src={
              process.env.PUBLIC_URL +
              "/video/1342961_Flying_Balloon_Celebration_Background_HD_BG.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Preloader />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <NavBar />
            <Home />
            <NewFooter />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
