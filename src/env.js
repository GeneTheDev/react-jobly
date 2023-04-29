import dotenv from "dotenv";
import process from "./env";

dotenv.config();

const process = {
  env: {
    NODE_ENV: process.env.NODE_ENV || "development",
  },
};

export default process;
