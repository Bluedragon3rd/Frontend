import { useLocation } from "react-router-dom";
import { useGameLogic } from "../hooks/useGameLogic";

const GamePage = () => {
  const location = useLocation();
  const { firstQuestion } = location.state || {};

  const {
    questions,
    currentStep,
    selectedOption,
    isCorrect,
    handleOptionClick,
    handleNext,
    isLoading,
  } = useGameLogic(firstQuestion);

  if (!firstQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-bold text-red-500">
          데이터가 없습니다. 처음부터 다시 시작해주세요.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentStep];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F9FAFB] pb-20 pt-10 px-4">
      {/* 진행도 상단바 */}
      <div className="w-full max-w-[806px] mb-12">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[28px] font-bold text-slate-900">
            Step {currentStep + 1}
          </span>
          <span className="text-[18px] font-medium text-slate-500">
            총 3문제
          </span>
        </div>
        <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-[806px] relative">
        {/* 질문 영역 */}
        <section className="bg-white rounded-[32px] px-10 py-12 shadow-sm border border-slate-100 mb-8 text-center min-h-[220px] flex items-center justify-center">
          <h2 className="text-[28px] font-bold text-slate-900 leading-relaxed keep-all">
            {currentQ?.question}
          </h2>
        </section>

        {/* 선지 영역 */}
        <div className="flex flex-col gap-4">
          {currentQ?.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const correct = option.isCorrect;

            let btnStyle =
              "bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50";

            if (isSelected) {
              btnStyle = correct
                ? "bg-green-100 border-green-500 text-green-800 font-bold"
                : "bg-red-100 border-red-500 text-red-800 font-bold";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx, correct)}
                disabled={selectedOption !== null || isLoading}
                className={`w-full py-5 px-8 rounded-2xl text-[20px] text-left transition-all ${btnStyle}`}
              >
                {option.content}
              </button>
            );
          })}
        </div>

        {/* O/X 애니메이션 피드백 */}
        {isCorrect !== null && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div
              className={`text-[150px] font-black animate-bounce ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect ? "⭕" : "❌"}
            </div>
          </div>
        )}

        {/* 하단 제어 버튼 */}
        {selectedOption !== null && (
          <div className="mt-8">
            <button
              onClick={handleNext}
              disabled={isLoading}
              className="w-full bg-slate-900 text-white text-[22px] font-bold py-5 rounded-2xl hover:bg-slate-800 transition disabled:opacity-50 shadow-xl"
            >
              {isLoading
                ? "압박 질문 생성 중..."
                : currentStep === 2
                  ? "결과 확인하기 🚀"
                  : "다음 문제로 이동 →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
