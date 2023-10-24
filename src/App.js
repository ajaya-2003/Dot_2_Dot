import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/ffooter/Footer";
import Whatsapplogo from "./images/whatsapplogo.png"
import NewFooter from "./components/Footer/NewFooter";
// import Maps from "./components/maps/maps";


function App() {
  return (
    <div className="bakground-layer">
      <div className="absolute-div" >
        <img src={Whatsapplogo} onClick={()=>window.location.href = 'https://wa.me/919741546178'} alt="whatsapp" />
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
        <NavBar />
        <Home />
        {/* <Maps /> */}
        {/* <Footer /> */}
        <NewFooter />
      </div>
      
    </div>
  );
}

export default App;
