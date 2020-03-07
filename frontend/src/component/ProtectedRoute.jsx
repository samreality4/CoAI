import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, authen, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        switch (authen) {
          case false:
            return <Redirect to="/login" />;
          default:
            return children;
        }
      }}
    />
  );
}

export default ProtectedRoute;
