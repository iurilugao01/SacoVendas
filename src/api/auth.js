import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

export default {
  async login(email, password) {
    const response = await axios.post("/login", { email, password });
    localStorage.setItem("token", response.data.access_token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.access_token}`;
    return response.data;
  },

  async register(name, email, password, password_confirmation) {
    return axios.post("/register", {
      name,
      email,
      password,
      password_confirmation,
    });
  },

  async logout() {
    await axios.post(
      "/logout",
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    localStorage.removeItem("token");
  },

  async getUser() {
    return axios.get("/user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
};
