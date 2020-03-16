import React from "react";
import { Zoom } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
              height:"19rem",
              backgroundImage: `url(${"/images/banner.jpg"})`
            }}
          >
            <Zoom in={true}>
              <div className="row col-md-6 text-center m-auto p-5">
                <h1>
                  Hi! Welcome to CoAI! A helper for any coder! Use it today!
                </h1>
              </div>
            </Zoom>
          </header>
          <div>
            <div className="col-sm-12">
              <Zoom in={true}>
                <div className="row col-md-6 m-auto p-5">
                  <h1>About CoAI</h1>
                  <p>
                    CoAI is a personal helper tool for any coder out there that
                    needs extra solution recalling. It searches solution codes
                    based on saved keywords, titles, and project name. Don't let
                    those hours of stackflowing and googling go to waste. Store
                    them in CoAI now!
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
