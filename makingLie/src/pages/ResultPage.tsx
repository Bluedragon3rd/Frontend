import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RetryButton from "../components/RetryButton";
import GradationButton from "../components/GradationButton";
import HonestTalkButton from "../components/HonestTalkButton";
import LieLevelCard from "../components/LieLevelCard";
import MemoryCostCard from "../components/MemoryCostCard";
import { useSituationStore } from "../store/useSituationStore";

const ResultPage = () => {
  const navigate = useNavigate();
  const { reset } = useSituationStore();

  // 1. 복사 상태 관리 (아이콘 변경용)
  const [isCopied, setIsCopied] = useState(false);

  // 핑계 텍스트 변수로 분리 (나중에 실제 데이터로 교체하기 쉬움)
  const excuseText = "개인 건강상의 이유로 늦어지게 되어 죄송합니다.";

  const handleRetry = () => {
    reset();
    navigate("/second-step");
  };

  // 2. 복사 핸들러 함수
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(excuseText);
      setIsCopied(true);
      // 2초 뒤에 다시 원래 아이콘으로 복귀
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] pb-20">
      <div className="mt-10 w-[806px] bg-white rounded-[32px] p-12 shadow-[0_10px_40px_rgba(168,85,247,0.15)] border border-purple-100 flex flex-col">
        <div className="self-start bg-[#9F21E3] text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-md">
          생성된 핑계
        </div>

        {/* 3. 클릭 가능한 영역으로 감싸기 */}
        <div
          onClick={handleCopy}
          className="group relative flex items-center justify-between mb-10 p-4 -ml-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
          title="클릭해서 복사하기"
        >
          <h1 className="text-[32px] font-medium text-gray-800 leading-relaxed pr-4">
            "{excuseText}"
          </h1>

          {/* 복사 버튼 아이콘 */}
          <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 group-hover:bg-purple-100 group-hover:text-purple-600 transition-all">
            {isCopied ? (
              // 체크 아이콘 (복사됨)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              // 복사 아이콘 (기본)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"
                />
              </svg>
            )}
          </button>

          {/* 복사됨 툴팁 (옵션) */}
          {isCopied && (
            <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg animate-fade-in-up">
              복사되었습니다!
            </span>
          )}
        </div>

        <hr className="w-full border-t-2 border-purple-100 mb-10" />

        <div className="flex flex-row gap-6 w-full">
          <div className="flex-1">
            <LieLevelCard level={5} />
          </div>
          <div className="flex-1">
            <MemoryCostCard level={9} />
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <HonestTalkButton />
      </div>
      <div className="flex flex-row gap-6 w-[806px] justify-between">
        <GradationButton
          title="반응 시뮬 보기"
          className="!w-[391px] !h-[104px] text-[55px] rounded-[20px]"
          onClick={() => navigate("/simulation")}
        />
        <RetryButton
          className="!w-[391px] !h-[104px] text-[55px] rounded-[20px]"
          onClick={handleRetry}
        />
      </div>
    </main>
  );
};

export default ResultPage;
