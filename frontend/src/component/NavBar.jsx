import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';



function NavBar () {
    return <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="">CoAI</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
     <Link hidden = {false} to="/login" className="nav-link" ><Button variant="contained" color="primary">Log In</Button></Link> 
     <Link hidden = {false}to="/register" className="nav-link" ><Button variant="contained" color="secondary">Register</Button></Link> 
     <Link hidden = {true}to="/logout" className="nav-link" ><Button variant="contained" color="secondary">logout</Button></Link> 
        <Link  className="nav-link" to="/about">
        <Button variant="contained">About Me</Button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default NavBar;