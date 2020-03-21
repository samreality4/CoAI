import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fetchUser } from "../../actions";
import { connect } from "react-redux";

function ProtectedRoute({ children, authen, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (authen === true) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(ProtectedRoute);
