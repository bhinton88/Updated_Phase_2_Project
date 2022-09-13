import React from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar, Container} from "react-bootstrap"

function NavBar() {

  return (
    <div id="navbar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Travel with Friends!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Trips">Trips</Nav.Link>
              <Nav.Link as={Link} to="/Event_Form">Event Submit</Nav.Link>
              <Nav.Link as={Link} to="/Budget">Budgets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )

}

export default NavBar; 