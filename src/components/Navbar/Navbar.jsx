import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Navbar.Brand href="/">D2D</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Features</Nav.Link>
          <Nav.Link href="/">Pricing</Nav.Link>
          <Dropdown as={Nav.Item} className="ms-lg-5">
            <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>First Item</Dropdown.Item>
              <Dropdown.Item>Second Item</Dropdown.Item>
              <Dropdown.Item>Third Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item} className="ms-lg-5">
            <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>First Item</Dropdown.Item>
              <Dropdown.Item>Second Item</Dropdown.Item>
              <Dropdown.Item>Third Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <div className="d-flex align-items-center ms-lg-5">
          <button type="button" className="btn btn-primary mx-2">Login</button>
          <button type="button" className="btn btn-secondary mx-2">Signup</button>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
