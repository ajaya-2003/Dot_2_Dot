import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-container shadow">
          <a className="navbar-brand" href="/">
            D2D
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>

              <li className="nav-item dropdown ms-5">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>

              <li className="nav-item ms-5">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-5">
                <Dropdown>
                  <Dropdown.Toggle
                    as="div"
                    id="dropdown-custom-components ms-8"
                  >
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
                <Dropdown>
                  <Dropdown.Toggle
                    as="div"
                    id="dropdown-custom-components ms-8"
                  >
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
                <button type="button" className="btn btn-primary mx-2 ms-5">
                  Login
                </button>
                <button type="button" className="btn btn-secondary mx-2">
                  Signup
                </button>
              </div>

              <div className="form-check form-switch mx-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar
