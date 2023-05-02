import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

// show page with list of jobs
function JobList() {
  console.debug("JobList");

  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

  // triggered by search form ; reloads jobs
  async function search(title) {
    try {
      let jobs = await JoblyApi.getJobs(title);
      setJobs(jobs);
      setError(null);
    } catch (err) {
      setError(err.message || "Error fetching jobs");
      setJobs([]);
    }
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <Search searchFor={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p>Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default JobList;
