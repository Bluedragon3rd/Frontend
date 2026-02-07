import { useNavigate } from "react-router-dom";
import RetryButton from "../components/RetryButton";
import GradationButton from "../components/GradationButton";
import HonestTalkButton from "../components/HonestTalkButton";
import LieLevelCard from "../components/LieLevelCard";
import MemoryCostCard from "../components/MemoryCostCard";

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 pb-20">
      {/* 1. 결과 메인 카드 */}
      <div className="mt-10 w-[806px] bg-white rounded-[32px] p-12 shadow-[0_10px_40px_rgba(168,85,247,0.15)] border border-purple-100 flex flex-col">
        <div className="self-start bg-[#9F21E3] text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-md">
          생성된 핑계
        </div>

        <h1 className="text-[32px] font-medium text-gray-800 leading-relaxed mb-10">
          "개인 건강상의 이유로 늦어지게 되어 죄송합니다."
        </h1>

        <hr className="w-full border-t-2 border-purple-100 mb-10" />

        <div className="flex flex-row gap-6 w-full">
          <div className="flex-1">
            <LieLevelCard level={5} />
          </div>
          <div className="flex-1">
            <MemoryCostCard level="높음" />
          </div>
        </div>
      </div>

      {/* 2. 솔직히 말하기 버튼 */}
      <div className="mt-10 mb-20">
        <HonestTalkButton />
      </div>

      {/* 3. 하단 버튼 영역 */}
      <div className="flex flex-row gap-6 w-[806px] justify-between">
        <GradationButton
          title="반응 시뮬 보기"
          className="!w-[391px] !h-[104px] text-[24px] rounded-[20px]"
          onClick={() => navigate("/simulation")}
        />
        <RetryButton className="!w-[391px] !h-[104px] text-[24px] rounded-[20px]" />
      </div>
    </div>
  );
};

export default ResultPage;
