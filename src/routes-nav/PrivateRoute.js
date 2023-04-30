import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({ component: Component, exact, path }) {
  const { currentUser } = useContext(UserContext);

  console.debug("PrivateRoute", "exact=", path, "currentUser=", currentUser);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route exact={exact} path={path} element={<Component />} />
    </Routes>
  );
}

export default PrivateRoute;
