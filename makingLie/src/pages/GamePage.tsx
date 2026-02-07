import { useGameLogic } from "../hooks/useGameLogic"; // 👈 위에서 만든 훅 임포트

const GamePage = () => {
  // 로직은 한 줄로 끝!
  const {
    questions,
    currentStep,
    selectedOption,
    isCorrect,
    handleOptionClick,
    handleNext,
  } = useGameLogic();

  if (questions.length === 0)
    return <div className="text-center mt-20">Loading...</div>;

  const currentQ = questions[currentStep];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F9FAFB] pb-20 pt-10 px-4">
      {/* 1. 진행도 헤더 */}
      <div className="w-full max-w-[806px] mb-12">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[28px] font-bold text-slate-900">
            Step {currentStep + 1}
          </span>
          <span className="text-[18px] font-medium text-slate-500">
            총 {questions.length}문제
          </span>
        </div>
        <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-[806px] relative">
        {/* 2. 질문 카드 */}
        <section className="bg-white rounded-[32px] px-10 py-12 shadow-sm border border-slate-100 mb-8 text-center min-h-[200px] flex items-center justify-center">
          <h2 className="text-[32px] font-bold text-slate-900 leading-relaxed keep-all">
            Q. {currentQ.question}
          </h2>
        </section>

        {/* 3. 선지 목록 */}
        <div className="flex flex-col gap-4">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            let btnStyle =
              "bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50";

            if (isSelected) {
              btnStyle = option.isCorrect
                ? "bg-green-100 border-green-500 text-green-800 font-bold"
                : "bg-red-100 border-red-500 text-red-800 font-bold";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx, option.isCorrect)}
                disabled={selectedOption !== null}
                className={`w-full py-6 rounded-2xl text-[22px] transition-all duration-200 ${btnStyle}`}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        {/* 4. O/X 피드백 */}
        {isCorrect !== null && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 animate-ping-short">
            <div
              className={`text-[150px] font-black opacity-80 drop-shadow-lg ${isCorrect ? "text-green-500" : "text-red-500"}`}
            >
              {isCorrect ? "⭕" : "❌"}
            </div>
          </div>
        )}

        {/* 5. 다음 버튼 */}
        {selectedOption !== null && (
          <div className="mt-8 animate-fade-in-up">
            <button
              onClick={handleNext}
              className="w-full bg-slate-900 text-white text-[24px] font-bold py-6 rounded-2xl hover:bg-slate-800 transition shadow-lg"
            >
              {currentStep === questions.length - 1
                ? "결과 보기"
                : "다음 문제 →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
