import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logOutUser } from "../actions";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  function onLogOut() {
    props.logOutUser(props.history);
  }
  
  function renderContent() {
    switch (props.auth) {
      case true:
        return (
          <Nav>
            <Link to="/logout" className="nav-link">
              <Button onClick={onLogOut} variant="contained" color="secondary">
                logout
              </Button>
            </Link>
          </Nav>
        );

      default:
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
            </Link>
          </Nav>
        );
    }
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
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
  return { auth };
}

export default withRouter(connect(mapStateToProps, { logOutUser })(NavBar));
