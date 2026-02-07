import axios from "axios";
import { getOrCreateCustomId } from "../utils/auth";

export const axiosInstance = axios.create({
  // 배포 시에는 상대 경로 그대로 사용하기 위해 baseURL을 비웁니다.
  // 로컬 개발 환경에서는 백엔드 주소(IP)를 사용합니다.
  baseURL: import.meta.env.PROD ? "" : "http://43.201.232.167:8000",
});

axiosInstance.interceptors.request.use((config) => {
  const id = getOrCreateCustomId();

  // POST 요청 시 데이터 주입
  if (config.method?.toLowerCase() === "post") {
    // 기존 데이터가 있으면 합치고, 없으면 새 객체 생성
    config.data = {
      ...(config.data || {}),
      id,
    };
  }

  // GET 요청 시 쿼리 파라미터 주입
  if (config.method?.toLowerCase() === "get") {
    config.params = {
      ...(config.params || {}),
      id,
    };
  }

  return config;
});
