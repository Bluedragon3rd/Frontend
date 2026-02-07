// api/axiosInstance.ts
import axios from "axios";
import { getOrCreateCustomId } from "../utils/auth";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const id = getOrCreateCustomId();

  if (config.method?.toLowerCase() === "post") {
    config.data = {
      ...config.data,
      id, // ✅ 항상 같은 id
    };
  }

  if (config.method?.toLowerCase() === "get") {
    config.params = {
      ...config.params,
      id, // ✅ GET도 동일 id
    };
  }

  return config;
});
