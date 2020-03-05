import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

function NavBar(props) {
  function renderContent() {
    switch (props.auth) {
      case null:
        return (
          <Nav>
            <Link to="/login" className="nav-link">
              <Button variant="contained" color="primary">
                Log In
              </Button>
            </Link>
            <Link to="/register" className="nav-link">
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </Link>{" "}
            <Link className="nav-link" to="/about">
              <Button variant="contained">About Me</Button>
            </Link>
          </Nav>
        );
      case false:
        return (
          <Nav>
            <Link to="/login" className="nav-link">
              <Button variant="contained" color="primary">
                Log In
              </Button>
            </Link>
            <Link to="/register" className="nav-link">
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </Link>{" "}
            <Link className="nav-link" to="/about">
              <Button variant="contained">About Me</Button>
            </Link>
          </Nav>
        );
      default:
        return (
          <Link to="/logout" className="nav-link">
            <Button variant="contained" color="secondary">
              logout
            </Button>{" "}
            <Link className="nav-link" to="/about">
              <Button variant="contained">About Me</Button>
            </Link>
          </Link>
        );
    }
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img
            src="/images/SXG.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          CoAI
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">{renderContent()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function mapStateToProps({ auth }) {
  console.log(auth);
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
