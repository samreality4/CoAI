import React, { useEffect} from "react";
import Header from "./component/Header";
import LogIn from "./page/LogIn";
import Footer from "./component/Footer";
import Search from "./page/Search";
import Register from "./page/Register";
import Home from "./page/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./redux/actions";
import ProtectedRoute from "./component/util/ProtectedRoute";

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
