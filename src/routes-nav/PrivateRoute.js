import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute() {
  const { currentUser } = useContext(UserContext);

  console.debug("PrivateRoute", "currentUser=", currentUser);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
