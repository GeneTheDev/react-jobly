import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

/**
 * checks if there is a valid user and only continues to the route
 */

function PrivateRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  console.debug("PrivateRoute", "currentUser=", currentUser);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
