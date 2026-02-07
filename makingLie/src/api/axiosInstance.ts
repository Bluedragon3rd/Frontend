import axios from "axios";
import { getOrCreateCustomId } from "../utils/auth";

export const axiosInstance = axios.create({
  // Vercel 배포 환경(PROD)이면 "/api" (vercel.json 프록시 타기)
  // 로컬 환경이면 직접 백엔드 주소로 쏘기
  baseURL: import.meta.env.PROD ? "/api" : "http://43.201.232.167:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const id = getOrCreateCustomId();

  // POST 요청 시 body에 id 주입
  if (config.method?.toLowerCase() === "post") {
    config.data = {
      ...config.data,
      id,
    };
  }

  // GET 요청 시 쿼리 스트링에 id 주입
  if (config.method?.toLowerCase() === "get") {
    config.params = {
      ...config.params,
      id,
    };
  }

  return config;
});
