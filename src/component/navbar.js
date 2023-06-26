import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./navbar.css"; // Import custom CSS file
import logom from "../images/logom.png";
const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="/" className="navbar-brand">
        <img
          src={logom}
          style={{ width: "200px", height: "50px" }}
          alt="logo not available"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#vehicles" className="nav-link">
            Cars
          </Nav.Link>
          <Nav.Link href="#vehicles" className="nav-link">
            Bikes
          </Nav.Link>
          <Nav.Link href="#vehicles" className="nav-link">
            Trucks
          </Nav.Link>
          <Nav.Link href="#vehicles" className="nav-link">
            Buses
          </Nav.Link>
          <Nav.Link href="#vehicles" className="nav-link">
            Home-on-wheel
          </Nav.Link>

          <Nav.Link href="#about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
        <Button variant="primary" className="btn-login">
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
