
import './App.css';
import Img from './components/img/img';
//import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import Slider from './components/calsole/slider';
// import Button from 'react-bootstrap/Button';
import Cards from './components/cards/cards'  
import EventCard from './components/eventcard/eventcard';
import 'font-awesome/css/font-awesome.min.css';
import  Footer from './components/ffooter/Footer'



function App() {


  return (
    
    <div className="App">
      <video autoPlay loop muted className="background-video">
       
        <source src={process.env.PUBLIC_URL + '/video/1342961_Flying_Balloon_Celebration_Background_HD_BG.mp4'} type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    <div classNameName="App ">
     
      
<h1 className="text-center cool-heading">
  <span style={{ color: 'blue', textDecoration: 'underline' }}>DOT</span>
  <span style={{ color: 'black', textDecoration: 'underline' }}> 2 </span>
  <span style={{ color: 'red', textDecoration: 'underline' }}>DOT</span>
</h1>
<div className="container">
  <div className="centered-content">
    <h2 className="text-center event-title">
      EVENTS
    </h2>
    <span style={{ fontSize: '16px', marginLeft: '10px' }}>-Connects Your Dream TO Reality</span>
  </div>
</div>

       {/* <h2 className="text-center event-title">
  EVENTS <span style={{ position: 'absolute', left: '55%', whiteSpace: 'nowrap' ,fontSize: '16px'}}>-Connects Your Dream TO Reality</span>
</h2> */}

{/* <div className="container">
  <div className="centered-content">
    <h2 className="text-center event-title">
      EVENTS
    </h2>
  </div>
  <div className="right-div">
    <span style={{ fontSize: '16px' }}>-Connects Your Dream TO Reality</span>
  </div>
</div> */}

{/* 2 */}









{/* <h2 className="text-center event-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             EVENTS <span style={{ whiteSpace: 'nowrap', fontSize: '16px' }}>-Connects Your Dream TO Reality</span>
</h2> */}
      {/* search */}

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex-container shadow" >
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light flex-container shadow-lg" > */}
        <a className="navbar-brand" href="/">D2D</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-middle" id="navbarNav" >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="/">Features</a>
            </li>

            <li className="nav-item dropdown ms-5">
            {/* <Dropdown>
      <Dropdown.Toggle as="div" id="dropdown-custom-components">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu as="ul" className="super-colors">
        <Dropdown.Item as="li">First Item</Dropdown.Item>
        <Dropdown.Item as="li">Second Item</Dropdown.Item>
        <Dropdown.Item as="li">Third Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
              {/* <Dropdown onMouseEnter={() => document.getElementById("dropdown").click()} align="end">
                <Dropdown.Toggle variant="secondary" id="dropdown">
                  Hover to Open
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
                            <a className="nav-link" href="/">Features</a>

            </li>



            <li className="nav-item ms-5">
              <a className="nav-link" href="/">Pricing</a>
            </li>
            <li className="nav-item ms-5">
              {/* <a className="nav-link disabled" href="/">Disabled</a> */}
              {/* <a className="nav-link" href="/">Disabled</a> */}
              <Dropdown>
      <Dropdown.Toggle as="div" id="dropdown-custom-components ms-8">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu as="ul" className="super-colors ">
        <Dropdown.Item as="li">First Item</Dropdown.Item>
        <Dropdown.Item as="li">Second Item</Dropdown.Item>
        <Dropdown.Item as="li">Third Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
            <li className="nav-item dropdown ms-5">
              {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div> */}
               <Dropdown>
      <Dropdown.Toggle as="div" id="dropdown-custom-components ms-8">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu as="ul" className="super-colors ">
        <Dropdown.Item as="li">First Item</Dropdown.Item>
        <Dropdown.Item as="li">Second Item</Dropdown.Item>
        <Dropdown.Item as="li">Third Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
            <div>
              {/* button  */}
              <button type="button" className="btn btn-primary mx-2 ms-5">Login</button>
              <button type="button" className="btn btn-secondary mx-2">Signup</button>
            </div>


            {/* dark mood switches */}
            <div className="form-check form-switch mx-5">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
            </div>


          </ul>
        </div>
      </nav>
      <div className="my-4"></div>
      {/* img slider */}
      <Img />
      {/* <Slider /> */}


      
      <div className="my-4"></div>  
      <Cards />

      <div className="my-4"></div>
      {/* <Evcd /> */}
      <h1>Upcoming Events</h1>
      <div className="event-container">
        <EventCard
          title="Event 1"
          date="May 15, 2023"
          location="City A"
          description="Join us for Event 1 in City A."
        />
        <EventCard
          title="Event 2"
          date="June 5, 2023"
          location="City B"
          description="Don't miss Event 2 in City B."
        />
        <EventCard
          title="Event 3"
          date="July 20, 2023"
          location="City C"
          description="Experience Event 3 in City C."
        />
        <EventCard
          title="Event 4"
          date="August 10, 2023"
          location="City D"
          description="Get ready for Event 4 in City D."
        />
      </div>
      
      </div>
     {/* Footer */}
     {/* <footer className="footer">
          <div className="container">
            <p>&copy; 2023 Your Website Name</p>
          </div>
        </footer> */}
             {/* Include the Footer component */}
      <Footer />

        
    </div>
  );
}

export default App;