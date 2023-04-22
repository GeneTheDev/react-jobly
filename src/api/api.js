import axios from "axios";

const BASE_URL = process.env.React_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  // the token for interactive with the APi will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // Get current user

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Get companies filter by name
  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

  // Get details on a company

  static async getCompany(handle) {
    let res = await this.request("companies", { handle });
    return res.company;
  }

  // Get list of jobs filter by title
  static async getJobs(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }

  // apply to a job
  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }

  // Get token for login from username, password
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // signup for users

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // save user profile page
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default JoblyApi;
