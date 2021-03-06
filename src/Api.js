import axios from "axios";
const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use((config) => {
//   if (localStorage.getItem("token")) {
//     config.headers["x-access-token"] = localStorage.getItem("token");
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     localStorage.clear();
//     return Promise.reject(err);
//   }
// );

export default instance;
