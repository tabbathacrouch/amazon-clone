import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ce4ef.cloudfunctions.net/api",
});

export default instance;
//http://localhost:5001/clone-ce4ef/us-central1/api (local)
