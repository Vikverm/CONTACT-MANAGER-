import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-manager-jn7a.onrender.com/api",
});

export default API;