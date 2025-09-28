import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://module-end-4-1.onrender.com/api",
});

// Attach token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
