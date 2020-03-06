import React, { useEffect } from "react";
import Header from "./Header";
import LogIn from "./LogIn";
import Footer from "./Footer";
import Search from "./Search";
import AddCard from "./Card/AddCard";
import Register from "./Register";
import About from "./About";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import {fetchUser} from "../actions";




function App(props) {
  
  useEffect(() => {
  props.fetchUser();
  }, []);

 console.log(props.auth); 
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <Home />
              </div>
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <div>
                <About />
              </div>
            )}
          />

          <Route
            exact
            path="/login"
            render={props => (
              <div>
                <LogIn />
              </div>
            )}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <div>
                <Register />
              </div>
            )}
          />
          <Route
            exact
            path="/main"
            render={props => (
              <div>
                <Search />
              </div>
            )}
          />

         
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, {fetchUser}) (App);
