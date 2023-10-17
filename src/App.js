import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/home/home";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/ffooter/Footer";
import Whatsapplogo from "./images/whatsapplogo.png"

function App() {
  return (
    <div className="bakground-layer">
      <div className="absolute-div" >
        <img src={Whatsapplogo} alt="whatsapp" ></img>
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
        <Header />
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
