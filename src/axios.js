import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-ce4ef/us-central1/api", //cloud function URL
});

export default instance;
