// src/api/questionApi.ts

import { axiosInstance } from "./axiosInstance";

export interface QuestionResponse {
  question: string;
  options: {
    content: string; // text 대신 content로 변경
    score: number;
    opt_id?: number;
    isCorrect?: boolean; // 가공 후를 대비해 선택 사항으로 유지
  }[];
  correct_opt_id?: number; // 서버 응답에 없다면 생략 가능
}

export const postQuestionAnswer = async (
  answer: string,
): Promise<QuestionResponse> => {
  const response = await axiosInstance.post<QuestionResponse>(
    "/api/questions",
    {
      answer: answer,
    },
  );

  return response.data;
};
