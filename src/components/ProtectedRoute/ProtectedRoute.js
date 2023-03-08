import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, isLoggedIn, ...props }) {
  return (
    <Route {...props}>
      {isLoggedIn ? Component : <Redirect to={"/"} />}
    </Route>
  );
}

export default ProtectedRoute;
