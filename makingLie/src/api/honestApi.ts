import { axiosInstance } from "./axiosInstance";

export interface HonestResponse {
  changed: string;
}

export const getHonestExcuse = async (
  honestState: string,
  currentExcuse: string,
): Promise<HonestResponse> => {
  const response = await axiosInstance.post<HonestResponse>(
    "/api/excuses/honest",
    {
      honest_state: honestState,
      current_excuse: currentExcuse,
      // ❌ id 안 넣어도 됨 (interceptor에서 자동 주입)
    },
  );

  return response.data;
};
