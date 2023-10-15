
import './App.css';
import Img from './components/img/img';
//import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    <div classNameName="App">
      <h1>DOT_TO_DOT</h1>
      {/* search */}

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >

        <a className="navbar-brand" href="/">D2D</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Features</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
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
            </li>



            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
            <li className="nav-item dropdown">
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
      <Dropdown.Toggle as="div" id="dropdown-custom-components">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu as="ul" className="super-colors">
        <Dropdown.Item as="li">First Item</Dropdown.Item>
        <Dropdown.Item as="li">Second Item</Dropdown.Item>
        <Dropdown.Item as="li">Third Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
            <div>
              {/* button  */}
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-secondary">Secondary</button>
            </div>


            {/* dark mood switches */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input  </label>
            </div>


          </ul>
        </div>
      </nav>

      {/* img slider */}
      {/* <Img /> */}


      {/* end */}
    </div>
  );
}

export default App;