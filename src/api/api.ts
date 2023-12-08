import axios from "axios";
import { Cookies } from "react-cookie";

console.log()

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL2,
  headers: {
    Accept: "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const res = error.response;
    if (res.status === 401) {
      const cookies = new Cookies();
      cookies.remove("token");
      window.location.href = "/";
    }
  }
);

axiosClient.interceptors.request.use(
  function (request) {
    if (request.url !== "auth/login") {
      const cookie = new Cookies();
      const token = cookie.get("token");
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;