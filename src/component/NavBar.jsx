import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function NavBar () {

    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">CoAI</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#deets">Log In</Nav.Link>
        <Nav.Link  href="#memes">
          About Me
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default NavBar;