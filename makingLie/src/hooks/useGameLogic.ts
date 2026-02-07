import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 데이터 타입 정의
export type QuestionData = {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean }[];
};

export const useGameLogic = () => {
  const navigate = useNavigate();

  // 1. 상태 관리
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0); // 👈 점수 상태 추가

  // 2. 데이터 로드 (Mock Data)
  useEffect(() => {
    const mockQuestions: QuestionData[] = [
      {
        id: 1,
        question: "상사가 '지금 어디야?' 라고 물었을 때, 가장 적절한 대처는?",
        options: [
          { text: "솔직하게 PC방이라고 말한다.", isCorrect: false },
          {
            text: "병원 진료 대기 중이라고 구체적으로 말한다.",
            isCorrect: true,
          },
          { text: "일단 무시하고 나중에 연락한다.", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "지각 사유를 물어볼 때 피해야 할 답변은?",
        options: [
          { text: "늦잠 잤습니다.", isCorrect: true }, // 피해야 할 답변이 정답
          { text: "배탈이 나서 화장실에 있었습니다.", isCorrect: false },
          { text: "가족에게 급한 일이 생겼습니다.", isCorrect: false },
        ],
      },
      {
        id: 3,
        question: "보고서가 늦었을 때 핑계로 가장 좋은 것은?",
        options: [
          { text: "그냥 까먹었습니다.", isCorrect: false },
          {
            text: "자료 조사가 더 필요해서 퀄리티를 높이고 있습니다.",
            isCorrect: true,
          },
          { text: "하기 싫어서 미뤘습니다.", isCorrect: false },
        ],
      },
    ];

    // 에러 방지를 위해 setTimeout 사용
    const timer = setTimeout(() => setQuestions(mockQuestions), 100);
    return () => clearTimeout(timer);
  }, []);

  // 3. 답변 선택 핸들러
  const handleOptionClick = (index: number, isAnswer: boolean) => {
    if (selectedOption !== null) return; // 이미 선택했으면 중복 클릭 방지

    setSelectedOption(index);
    setIsCorrect(isAnswer);

    // 👈 정답이면 점수 1점 추가
    if (isAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  // 4. 다음 문제 이동 핸들러
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      // 다음 문제로 이동
      setCurrentStep((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      // 👈 모든 문제가 끝남: 결과 페이지로 이동하며 점수(score) 전달
      navigate("/game-result", { state: { score: score } });
    }
  };

  // 5. Hook이 반환하는 값들
  return {
    questions,
    currentStep,
    selectedOption,
    isCorrect,
    handleOptionClick,
    handleNext,
  };
};
