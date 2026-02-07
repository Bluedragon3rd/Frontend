import { useNavigate } from "react-router-dom";
import { postQuestionAnswer } from "../api/questionApi";
import GameRulesCard from "../components/GameRulesCard";
import GameStartButton from "../components/GameStartButton";

const MinigamePage = () => {
  const navigate = useNavigate();

  const gameRules = [
    "상사의 압박 질문이 화면에 나타납니다.",
    "제한 시간 5초 안에 핑계를 말해야 합니다.",
    "목소리가 너무 작거나, '어...'를 많이 하면 실패!",
    "앞서 AI가 추천해준 핑계 논리를 활용하세요.",
  ];

  const handleStart = async () => {
    const excuse = localStorage.getItem("resultData")
      ? JSON.parse(localStorage.getItem("resultData")!).excuse
      : "";

    // 🔥 1번만 호출
    const firstQuestion = await postQuestionAnswer(excuse);
    console.log("📦 firstQuestion API 응답:", firstQuestion);

    navigate("/game", {
      state: {
        firstQuestion,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] pb-20">
      <header className="flex flex-col items-center mb-[50px] mt-10 text-center">
        <div className="text-[64px] mb-4">🔥</div>
        <h1 className="text-[42px] font-bold text-gray-900 mb-3 tracking-tight">
          실전 압박 시뮬레이션
        </h1>
        <h3 className="text-[20px] font-medium text-gray-500 tracking-tight">
          심장이 쫄깃해지는 실전 연습입니다. 준비되셨나요?
        </h3>
      </header>

      <div className="w-[806px] mb-10">
        <GameRulesCard rules={gameRules} />
      </div>

      <div className="w-[806px] h-[92px]">
        <GameStartButton onClick={handleStart} />
      </div>
    </div>
  );
};

export default MinigamePage;
