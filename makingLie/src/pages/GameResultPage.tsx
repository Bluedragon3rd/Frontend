import { useLocation, useNavigate } from "react-router-dom";

const GameResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 이전 페이지에서 넘겨준 점수 (없으면 0점 처리)
  const score = location.state?.score || 0;
  const totalQuestions = 3; // 총 문제 수

  // 점수에 따른 멘트 및 스타일 설정 함수
  const getResultContent = (score: number) => {
    switch (score) {
      case 3:
        return {
          emoji: "👑",
          title: "완벽하시네요!",
          desc: "핑계의 신이십니다. 하산하셔도 좋습니다.",
          color: "text-green-600",
          bgColor: "bg-green-50 border-green-200",
        };
      case 2:
        return {
          emoji: "🤔",
          title: "좀 더 노력해야죠",
          desc: "나쁘진 않지만, 상사의 눈초리를 피하긴 어렵겠어요.",
          color: "text-blue-500",
          bgColor: "bg-blue-50 border-blue-200",
        };
      case 1:
        return {
          emoji: "🥶",
          title: "오들오들 떨고 계세요?",
          desc: "이대로 가면 멘탈이 바사삭 부서질 수 있습니다.",
          color: "text-orange-500",
          bgColor: "bg-orange-50 border-orange-200",
        };
      default: // 0점
        return {
          emoji: "🏃‍♂️",
          title: "옷 챙겨입고 서두르시죠",
          desc: "핑계 댈 시간도 없습니다. 지금 당장 뛰세요!",
          color: "text-red-600",
          bgColor: "bg-red-50 border-red-200",
        };
    }
  };

  const result = getResultContent(score);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] px-4 pb-20">
      {/* 1. 결과 카드 */}
      <div
        className={`w-full max-w-[500px] rounded-[32px] border-4 p-10 text-center shadow-xl mb-10 ${result.bgColor} ${result.color.replace("text", "border")}`}
      >
        {/* 이모지 & 점수 */}
        <div className="text-[80px] mb-4">{result.emoji}</div>

        <div className="text-[24px] font-bold text-slate-400 mb-2">
          Score: {score} / {totalQuestions}
        </div>

        {/* 메인 타이틀 */}
        <h1 className={`text-[36px] font-extrabold mb-4 ${result.color}`}>
          "{result.title}"
        </h1>

        {/* 설명 */}
        <p className="text-[20px] text-slate-600 font-medium whitespace-pre-line break-keep">
          {result.desc}
        </p>
      </div>

      {/* 2. 홈으로 돌아가기 버튼 */}
      <button
        onClick={() => navigate("/")}
        className="
          w-full max-w-[500px]
          h-[70px]
          rounded-[24px]
          bg-slate-900
          text-white
          text-[22px] font-bold
          shadow-lg
          transition-transform
          active:scale-[0.98]
          hover:bg-slate-800
        "
      >
        🏠 홈으로 돌아가기
      </button>
    </div>
  );
};

export default GameResultPage;
