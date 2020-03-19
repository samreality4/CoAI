import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, authen, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        switch (authen) {
          case true:
            return children;
          default:
            return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
