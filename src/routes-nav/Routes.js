import React from "react";
import { Route as RouterSwitch, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignUpForm";
import PrivateRoute from "./PrivateRoute";

/** site routes
 * parts of site should only be visitable when logged in
 *
 * visiting a non-existant route redirects to the homepage
 */

function Routes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );

  return (
    <div className="pt-5">
      <RouterSwitch>
        <Routes exact path="/">
          <Homepage />
        </Routes>

        <Routes exact path="/login">
          <LoginForm login={login} />
        </Routes>

        <Routes exact path="/signup">
          <SignupForm signup={signup} />
        </Routes>

        <PrivateRoute exact path="/companies">
          <CompanyList />
        </PrivateRoute>

        <PrivateRoute exact path="/jobs">
          <JobList />
        </PrivateRoute>

        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetail />
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <ProfileForm />
        </PrivateRoute>

        <Navigate to="/" />
      </RouterSwitch>
    </div>
  );
}

export default Routes;
