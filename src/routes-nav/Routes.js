import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignUpForm";
import PrivateRoute from "./PrivateRoute";

function AppRoutes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );

  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route
          path="/companies/*"
          element={<PrivateRoute component={CompanyList} />}
        />
        <Route path="/jobs/*" element={<PrivateRoute component={JobList} />} />
        <Route
          path="/companies/:handle"
          element={<PrivateRoute component={CompanyDetail} />}
        />
        <Route
          path="/profile/*"
          element={<PrivateRoute component={ProfileForm} />}
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
