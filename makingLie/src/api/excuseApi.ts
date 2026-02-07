import { axiosInstance } from "./axiosInstance";

export interface ExcuseResponse {
  status: number;
  excuse: string;
  lie_level: number;
  memory_level: "low" | "medium" | "high";
  scenario: { percent: number; reaction: string }[];
}

export const postExcuseData = async (data: {
  situation: string;
  reason: number;
  mood: string;
  target_audience: string;
}): Promise<ExcuseResponse> => {
  const response = await axiosInstance.post<ExcuseResponse>(
    "/api/excuses",
    data,
  );

  return response.data;
};
