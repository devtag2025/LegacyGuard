import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";

export const axiosClient = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_token");
    if (token && config.url?.startsWith("/admin")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data, 
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    const status = error.response?.status;

    if (status === 401 && window.location.pathname.startsWith("/admin")) {
      localStorage.removeItem("admin_token");
      window.location.href = "/admin/login";
    }

    return Promise.reject({ message, status, raw: error });
  }
);