import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postQuestionAnswer, type QuestionResponse } from "../api/questionApi";

// UI 관리를 위해 확장된 타입
interface EnrichedQuestion extends QuestionResponse {
  options: Array<
    QuestionResponse["options"][0] & {
      isCorrect: boolean;
    }
  >;
  userSelectedIdx: number | null; // 사용자가 선택한 번호를 기록
}

export const useGameLogic = (initialQuestion: QuestionResponse) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (answer: string) => postQuestionAnswer(answer),
  });

  // 데이터 가공: score가 가장 높은 것을 정답으로 처리
  const enrichQuestion = (q: QuestionResponse): EnrichedQuestion => {
    const maxScore = Math.max(...q.options.map((o) => o.score));
    return {
      ...q,
      userSelectedIdx: null,
      options: q.options.map((opt) => ({
        ...opt,
        isCorrect: opt.score === maxScore,
      })),
    };
  };

  const [questions, setQuestions] = useState<EnrichedQuestion[]>([
    enrichQuestion(initialQuestion),
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 옵션 클릭 시 상태 저장
  const handleOptionClick = (idx: number, correct: boolean) => {
    if (selectedOption !== null) return;

    setSelectedOption(idx);
    setIsCorrect(correct);

    // 현재 문제의 선택 기록을 업데이트
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[currentStep].userSelectedIdx = idx;
      return newQuestions;
    });
  };

  const handleNext = async () => {
    if (selectedOption === null) return;

    // 3번째 문제(Step 3) 종료 시점
    if (currentStep === 2) {
      // 맞은 개수 합산 계산
      const correctCount = questions.reduce((acc, q) => {
        if (q.userSelectedIdx === null) return acc;
        return acc + (q.options[q.userSelectedIdx].isCorrect ? 1 : 0);
      }, 0);

      // 결과 페이지로 데이터 전달
      navigate("/game-result", {
        state: {
          questions,
          correctCount,
          totalScore: Math.round((correctCount / 3) * 100),
        },
      });
      return;
    }

    // 다음 질문을 위한 API 호출
    const userSelectedAnswer =
      questions[currentStep].options[selectedOption].content;

    try {
      const nextRaw = await mutation.mutateAsync(userSelectedAnswer);
      const enriched = enrichQuestion(nextRaw);

      setQuestions((prev) => [...prev, enriched]);
      setCurrentStep((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } catch (error) {
      console.error("데이터 로딩 실패:", error);
      alert("다음 문제를 불러오지 못했습니다.");
    }
  };

  return {
    questions,
    currentStep,
    selectedOption,
    isCorrect,
    handleOptionClick,
    handleNext,
    isLoading: mutation.isPending,
  };
};
