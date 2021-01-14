import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logOutUser } from "../redux/actions";


function NavBar({logOutUser, history, auth}) {
  function onLogOut() {
    logOutUser(history);
  }
  
  function renderContent() {
    switch (auth) {
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
              <Button variant="outlined" color="primary">
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
