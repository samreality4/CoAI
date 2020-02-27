import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";



function NavBar () {

    return <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">CoAI</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
     <Link to="/login" className="nav-link" >Log In</Link> 
        <Link  className="nav-link" to="/about">
          About Me
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default NavBar;