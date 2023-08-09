import axios from "axios";

export const api = axios.create({
  baseURL: "https://urchin-app-l7pyx.ondigitalocean.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
