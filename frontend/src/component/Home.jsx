import React from "react";
import { Zoom } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";

function Home(props) {
  switch (props.auth) {
    case true:
      return <Redirect to="/main" />;
    default:
      return (
        <div className="container mw-100">
          <div className="row">
            <header
              className="text-white col-sm-12"
              style={{
                height: "22rem",
                backgroundImage: `url(${"/images/banner.jpg"})`
              }}
            >
              <Zoom in={true}>
                <div className="row col-md-6 text-center m-auto p-5 justify-content-end">
                  <h1 className="home-head">
                    Hi! Welcome to CoAI! A helper for any coder! Use it today!
                  </h1>
                  <Link to="/register" className="nav-link"><Button variant="contained" color="secondary">Get Started</Button></Link>
                </div>
              </Zoom>
            </header>
            <div>
              <div className="col-sm-12">
                <Zoom in={true}>
                  <div className="row col-md-6 m-auto p-5">
                    <h1 className="home-head">About CoAI</h1>
                    <p>
                      CoAI is a collaborative helper tool for any coder out
                      there that needs some extra help. It searches solution
                      codes based on saved keywords, titles, and project name
                      shared by you and other users. Store your solution in CoAI
                      now!
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
