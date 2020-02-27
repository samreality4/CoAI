import React from "react";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import Footer from "./Footer";
import Search from "./Search";
import AddForm from "./AddForm";
import OneCard from "./OneCard";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <AddForm />

                <Search />
              </div>
            )}
          />
<Route
            exact
            path="/about"
            render={props => (
              <div>

         <About/>

              </div>
            )}
          />

<Route
            exact
            path="/login"
            render={props => (
              <div>

       <LogIn/>

              </div>
            )}
          />

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
