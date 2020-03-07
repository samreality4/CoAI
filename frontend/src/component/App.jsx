import React, { useEffect } from "react";
import Header from "./Header";
import LogIn from "./LogIn";
import Footer from "./Footer";
import Search from "./Search";
import Register from "./Register";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import ProtectedRoute from "./ProtectedRoute";

function App(props) {
  useEffect(() => {
    props.fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Home />
              </div>
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <div>
                <About />
              </div>
            )}
          />

          <Route
            exact
            path="/login"
            render={() => (
              <div>
                <LogIn />
              </div>
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <div>
                <Register />
              </div>
            )}
          />
          <ProtectedRoute exact path="/main" authen={props.auth}>
            <div>
              <Search />
            </div>
          </ProtectedRoute>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
